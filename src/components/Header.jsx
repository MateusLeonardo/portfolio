import { FiSun } from "react-icons/fi";
import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.headerBg}>
      <div className={styles.headerContainer}>
        <span>Mateus</span>

        <nav className={styles.navMenu}>
          <ul className={styles.ulMenu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="sobre">Sobre</a>
            </li>
            <li>
              <a href="projetos">Projetos</a>
            </li>
            <li>
              <a href="contato">Contato</a>
            </li>
            <li>
              <button>PT</button>
            </li>
            <li>
              <FiSun />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
