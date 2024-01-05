import { FiSun } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to={'/'}>Mateus</Link>

        {menuOpen ? (
          <IoClose size={30} color="#F5F6F6" onClick={handleToggleMenu} />
        ) : (
          <IoMenu size={30} color="#F5F6F6" onClick={handleToggleMenu} />
        )}
        <nav className={`${styles.navMenu} ${menuOpen && styles.active}`}>
          <ul className={styles.ulMenu}>
            <li>
              <Link to={'/'}>Home</Link>
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
              <button className={styles.buttonTranslater}>En</button>
            </li>
            <li>
              <FiSun size={20} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
