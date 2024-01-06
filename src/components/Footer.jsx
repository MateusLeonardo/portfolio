import { FaArrowUp } from "react-icons/fa6";
import styles from './Footer.module.css'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <footer className={styles.footer}>
      <p>Mateus Leonardo © 2023</p>
      <FaArrowUp className="botaoAnimado" onClick={scrollToTop}/>
    </footer>
  );
}
