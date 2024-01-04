import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Subtitle } from "../components/Subtitle";
import styles from "./Home.module.css";
import {
  FaLongArrowAltRight,
  FaReact,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export function Home() {
  return (
    <>
      <Header />
      <main>
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
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className={styles.rightContent}>
            <img src="../../public/FotoMateus.jpg" alt="" />
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.leftContent}>
            <figure>
              <img src="../../public/bro.png" alt="" />
            </figure>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.tecnologies}>
              <FaReact size={35} />
              <IoLogoJavascript size={35} />
              <FaHtml5 size={35} />
              <FaCss3 size={35} />
              <FaFigma size={35} />
            </div>
            <Subtitle text="Sobre mim" />
            <h1>
              Sou um desenvolvedor de software apaixonado em busca de uma
              oportunidade para atuar na área de front-end.
            </h1>
            <p>
              Além da programação, gosto de praticar musculação regularmente
              para manter um estilo de vida saudável. Além disso, aprecio a
              experiência de saborear uma boa xícara de café. Sou apaixonado por
              gatos e desfruto muito da companhia e ternura desses animais.
              Também tenho uma grande paixão por estudar e aprimorar meu
              conhecimento e habilidades em diversas áreas.
            </p>
            <button>
              Meu Currículo <FaLongArrowAltRight />
            </button>
          </div>
        </section>

        <section className={styles.projectsContainer}>
          <div className={styles.titleProjects}>
            <Subtitle text="Projetos" />
            <p>Aqui estão meus principais projetos</p>
          </div>
          <div className={styles.projetcs}>
            <div className={styles.card}>
              <img src="../../public/Project image.png" alt="" />
              <div className={styles.timeProject}>
                <p>Em desenvolvimento</p>
                <div className={styles.tecnologies}>
                  <IoLogoJavascript size={25} />
                  <FaHtml5 size={25} />
                  <FaCss3 size={25} />
                </div>
              </div>
              <h1>Projeto Nome</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                tempora quibusdam autem quisquam assumenda quas?
              </p>
            </div>

            <div className={styles.card}>
              <img src="../../public/Project image.png" alt="" />
              <div className={styles.timeProject}>
                <p>Em desenvolvimento</p>
                <div className={styles.tecnologies}>
                  <IoLogoJavascript size={25} />
                  <FaHtml5 size={25} />
                  <FaCss3 size={25} />
                </div>
              </div>
              <h1>Projeto Nome</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                tempora quibusdam autem quisquam assumenda quas?
              </p>
            </div>

            <div className={styles.card}>
              <img src="../../public/Project image.png" alt="" />
              <div className={styles.timeProject}>
                <p>Em desenvolvimento</p>
                <div className={styles.tecnologies}>
                  <IoLogoJavascript size={25} />
                  <FaHtml5 size={25} />
                  <FaCss3 size={25} />
                </div>
              </div>
              <h1>Projeto Nome</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                tempora quibusdam autem quisquam assumenda quas?
              </p>
            </div>
            
            <div className={styles.card}>
              <img src="../../public/Project image.png" alt="" />
              <div className={styles.timeProject}>
                <p>Em desenvolvimento</p>
                <div className={styles.tecnologies}>
                  <IoLogoJavascript size={25} />
                  <FaHtml5 size={25} />
                  <FaCss3 size={25} />
                </div>
              </div>
              <h1>Projeto Nome</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                tempora quibusdam autem quisquam assumenda quas?
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.leftContent}>
          <img src="../../public/Mobile-rafiki.svg" alt="" width={200}/>
            <Subtitle text="Contato" />
            <h2>Gostou do meu trabalho? Vamos trabalhar juntos.</h2>
            <p>Me envie um <a href="mailto:mateus_leonardo1997@hotmail.com">email</a>.</p>
          </div>
          <div className={styles.rightContent}>
            <form className={styles.formContact}>
              <input type="text" placeholder="Nome"/>
              <input type="email" placeholder="E-mail"/>
              <textarea rows={10} placeholder="Digite sua mensagem"/>
              <button type="submit">Enviar mensagem <FaLongArrowAltRight/></button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
