import { IoMenu, IoClose } from "react-icons/io5";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header({ scrollToSection, sobreRef, projetosRef, contatoRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (ref) => (e) => {
    e.preventDefault();
    scrollToSection(ref);
    handleToggleMenu()
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const clickedName = e.target.innerHTML;
    if (clickedName !== "Mateus") {
      handleToggleMenu()
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {isHomePage ? (
          <a href="#" onClick={scrollToTop}>
            Mateus
          </a>
        ) : (
          <Link to={"/"}>Mateus</Link>
        )}

        {menuOpen ? (
          <IoClose size={30} color="#F5F6F6" onClick={handleToggleMenu} />
        ) : (
          <IoMenu size={30} color="#F5F6F6" onClick={handleToggleMenu} />
        )}
        <nav className={`${styles.navMenu} ${menuOpen && styles.active}`}>
          <ul className={styles.ulMenu}>
            <li>
              {isHomePage ? (
                <a href="#" onClick={scrollToTop}>
                  Home
                </a>
              ) : (
                <Link to={"/"} onClick={handleToggleMenu}>
                  Home
                </Link>
              )}
            </li>
            {isHomePage && (
              <>
                <li>
                  <a href="#sobre" onClick={handleLinkClick(sobreRef)}>
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#projetos" onClick={handleLinkClick(projetosRef)}>
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contato" onClick={handleLinkClick(contatoRef)}>
                    Contato
                  </a>
                </li>
              </>
            )}
            {/* <li>
              <button className={styles.buttonTranslater}>En</button>
            </li>
            <li>
              <FiSun size={20} />
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
