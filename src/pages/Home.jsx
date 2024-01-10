import { Subtitle } from "../components/Subtitle";
import styles from "./Home.module.css";
import projetos from "../../projetos";
import fotoMateus from "../assets/FotoMateus.jpg";
import fotoSobre from "../assets/bro.png";
import fotoContato from "../assets/MobileRafiki.svg";
import {
  FaLongArrowAltRight,
  FaReact,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaLinkedin,
  FaGithub,
  FaCheck,
  FaGitAlt
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Tooltip } from "antd";

export function Home({ sobreRef, projetosRef, contatoRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    try {
      setSendingMessage(true);
      const templateParams = {
        from_name: name,
        message: message,
        email: email,
      };
      const response = await emailjs.send(
        "service_s0usnqp",
        "template_odki7as",
        templateParams,
        "MHvpjapl3Mpmr-zzN"
      );

      setEmail("");
      setMessage("");
      setName("");

      setSendingMessage(false);
      setSentMessage(true);

      setTimeout(() => {
        setSentMessage(false);
      }, 2000);
    } catch (err) {
      console.log("Erro:", err);
    }
  };

  return (
    <>
      <main className="main">
        <section className={styles.headline}>
          <div className={styles.leftContent}>
            <h1>Olá, meu nome é Mateus</h1>
            <h2>Desenvolvedor Front-End</h2>
            <p>
              Sou entusiasta na criação de soluções web usando tecnologias como
              React, Javascript, HTML, CSS.
            </p>
            <div className={styles.socials}>
              <Subtitle text="Minhas redes sociais" />
              <a
                href="https://www.linkedin.com/in/mateus-leonardo-dev/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/MateusLeonardo" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className={styles.rightContent}>
            <img src={fotoMateus} alt="" />
          </div>
        </section>

        <section className={styles.aboutContainer} id="sobre" ref={sobreRef}>
          <div className={styles.about}>
            <div className={styles.leftContent}>
              <img src={fotoSobre} alt="" />
            </div>
            <div className={styles.rightContent}>
              <div className={styles.tecnologies}>
                <FaReact size={35} />
                <IoLogoJavascript size={35} />
                <FaHtml5 size={35} />
                <FaCss3 size={35} />
                <FaFigma size={35} />
                <FaGitAlt  size={35}/>
              </div>
              <Subtitle text="Sobre mim" />
              <h1>
                Sou um desenvolvedor de software em busca de uma oportunidade
                para atuar na área de front-end.
              </h1>
              <p>
                Além da minha parxão pela tecnologia, mantenho um estilo de vida
                saudável praticando musculação regularmente, visando promover
                minha saúde física e mental. Aprecio uma boa xícara de café é um
                dos meus pequenos prazeres. Sou um entusiasta no mundo do
                desenvolvimento web, e possuo conhecimento em linguaguens como{" "}
                <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, <b>Scss</b>, <b>Figma</b>. E buscando sempre me aperfeiçoar neste meio.
              </p>
              <a
                href="https://drive.google.com/file/d/1xBqSwkhmqkifOtNVzexC6lsWliRZWQvM/view?usp=sharing"
                target="_blank"
              >
                Meu Currículo <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </section>

        <section
          className={styles.projectsContainer}
          id="projetos"
          ref={projetosRef}
        >
          <div className={styles.titleProjects}>
            <Subtitle text="Projetos" />
            <p>Aqui estão meus principais projetos</p>
          </div>
          <div className={styles.projetcs}>
            {projetos.map((projeto) => (
              <div className={styles.card} key={projeto.id}>
                <img src={projeto.imagem} alt="" />
                <div className={styles.timeProject}>
                  <p>{projeto.status}</p>
                  <div className={styles.tecnologies}>
                    {projeto.technologies.map((technology, index) => (
                      <Tooltip
                        key={index}
                        title={technology.key}
                        placement="bottom"
                        color="#0C5A6E"
                      >
                        <span>{technology}</span>
                      </Tooltip>
                    ))}
                  </div>
                </div>
                <h1>{projeto.nome}</h1>
                <p>{projeto.descricaoPequena}</p>
                <Link to={`/projeto/${projeto.id}`}>
                  Detalhes <GoArrowUpRight />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section
          className={styles.contactContainer}
          id="contato"
          ref={contatoRef}
        >
          <div className={styles.contact}>
            <div className={styles.leftContent}>
              <img src={fotoContato} alt="" width={200} />
              <Subtitle text="Contato" />
              <h2>Gostou do meu trabalho? Vamos trabalhar juntos.</h2>
              <p>
                Me envie um{" "}
                <a href="mailto:mateus_leonardo1997@hotmail.com">email</a>.
              </p>
            </div>
            <div className={styles.rightContent}>
              <form className={styles.formContact}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
                <textarea
                  rows={10}
                  placeholder="Digite sua mensagem"
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                />
                {sentMessage ? (
                  <button type="submit" disabled onClick={sendEmail}>
                    Mensagem enviada! <FaCheck color="green" />
                  </button>
                ) : sendingMessage ? (
                  <button type="submit" disabled onClick={sendEmail}>
                    Enviando mensagem <span className="loading"></span>
                  </button>
                ) : (
                  <button type="submit" onClick={sendEmail}>
                    Enviar mensagem <FaLongArrowAltRight />
                  </button>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
