import fotoNaoEncontrada from "../assets/Error404Img.webp";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <main className={`main ${styles.container}`}>
      <img src={fotoNaoEncontrada} alt="página não encontrada" />
      <h1>Ops, página não encontrada.</h1>
    </main>
  );
}
