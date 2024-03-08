import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projetos from "../../projetos";
import styles from "./ProjectDetails.module.css";
import { TbWorld } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { Tooltip } from "antd";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projeto, setProjeto] = useState({});

  useEffect(() => {
    const projetoEncontrado = projetos.find((projeto) => projeto.id === id);

    if (projetoEncontrado) {
      setProjeto(projetoEncontrado);
    }
  }, [id]);
  return (
    <main className={`main ${styles.container}`}>
      <div className={styles.linkVoltar}>
        <Link to="/projeto">
          {" "}
          <FaArrowLeft /> Voltar
        </Link>
      </div>
      <div className={styles.containerProjectDescription}>
        <div className={styles.projectDescription}>
          <img src={projeto.imagem} alt="" />
          <div className={styles.content}>
            <div className={styles.timeProject}>
              <p>{projeto.status}</p>
              <div className={styles.tecnologies}>
                {projeto.technologies &&
                  projeto.technologies.map((technology, index) => (
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
            <p>{projeto.descricao}</p>
          </div>
        </div>
        <div className={styles.projectLinks}>
          <h2>Dê uma olhada neste projeto</h2>
          <a
            href={projeto.liveDemo}
            target="_blank"
            className={styles.linkLiveDemo}
          >
            <TbWorld /> <span>Live demo</span>
            <GoArrowUpRight />
          </a>
          <a
            href={projeto.githubCode}
            target="_blank"
            className={styles.linkCodeGithub}
          >
            <FaGithub /> <span>Código</span>
            <GoArrowUpRight />
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
