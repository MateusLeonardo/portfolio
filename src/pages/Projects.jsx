import React from 'react'
import projetos from '../../projetos'
import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import { GoArrowUpRight } from 'react-icons/go'
import { Subtitle } from '../components/Subtitle'
import { Tooltip } from 'antd'

const Projects = () => {
  React.useEffect(() => {
    scrollToTop()
  },[])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }

  return (
    <section
    className={styles.projectsContainer}
  >
    <div className={styles.titleProjects}>
      <Subtitle text="Projetos" />
      <p>Aqui estão todos os meus projetos</p>
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
  )
}

export default Projects