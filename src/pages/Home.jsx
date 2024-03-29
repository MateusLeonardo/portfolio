import { Subtitle } from "../components/Subtitle";
import styles from "./Home.module.css";
import projetos from "../../projetos";
import fotoMateus from "../assets/FotoMateus.webp";
import fotoSobre from "../assets/bro.webp";
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
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Tooltip } from "antd";

export function Home({ sobreRef, projetosRef, contatoRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [emailRegex, setEmailRegex] = useState(false);
  const [formCompleteResponse, setFormCompleteResponse] = useState(false);
  const refFormCompleteResponse = useRef();
  const refEmailValidResponse = useRef();

  const sendEmail = async (event) => {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      setFormCompleteResponse(true);
      clearTimeout(refFormCompleteResponse.current);
      refFormCompleteResponse.current = setTimeout(() => {
        setFormCompleteResponse(false);
      }, 2000);
      return;
    }

    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailRegex.test(email)) {
      setEmailRegex(true);
      clearTimeout(refEmailValidResponse.current);
      refEmailValidResponse.current = setTimeout(() => {
        setEmailRegex(false);
      }, 2000);
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
            <h2>Desenvolvedor de Software</h2>
            <p>
              Sou entusiasta na criação de soluções web usando tecnologias como
              React, Javascript, HTML, CSS...
            </p>
            <div className={styles.socials}>
              <Subtitle text="Minhas redes sociais" />
              <a
                href="https://www.linkedin.com/in/mateus-leonardo-dev/"
                target="_blank"
                aria-label="Link para LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/MateusLeonardo"
                target="_blank"
                aria-label="Link para Github"
              >
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
                <FaGitAlt size={35} />
              </div>
              <Subtitle text="Sobre mim" />
              <h1>
                Sou um desenvolvedor de software em busca de uma oportunidade
                para atuar na área de front-end.
              </h1>
              <p>
                Me considero um entusiasta no mundo do desenvolvimento web, e
                possuo conhecimento em linguagens como <b>HTML</b>, <b>CSS</b>,{" "}
                <b>JavaScript</b>, <b>React</b>, <b>Sass</b>, <b>Figma</b>,{" "}
                <b>Git</b>. E estou buscando sempre me aperfeiçoar neste meio.
              </p>
              <a
                href="https://drive.google.com/file/d/1BTIwlAvQOyf2Pl0YJITWDA1_bakw7lfN/view?usp=sharing"
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
            {projetos.slice(0, 3).map((projeto) => (
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
          <div className={styles.linkTodosProjetos}>
            <Link to={"/projeto"}>
              Ver todos <GoArrowUpRight />
            </Link>
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
              <p>Me envie um email.</p>
            </div>
            <div className={styles.rightContent}>
              <form className={styles.formContact}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  required
                />
                {emailRegex && (
                  <span className={styles.incorrect}>
                    Digite um email valido!
                  </span>
                )}
                <textarea
                  rows={10}
                  placeholder="Digite sua mensagem"
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                  required
                />
                {formCompleteResponse && (
                  <span className={styles.incorrect}>
                    Preencha todos os campos!
                  </span>
                )}
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
