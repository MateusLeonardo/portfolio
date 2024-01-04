import { FaArrowUp } from "react-icons/fa6";
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Mateus Leonardo © 2023</p>
      <FaArrowUp/>
    </footer>
  );
}
