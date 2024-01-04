import styles from './Subtitle.module.css';

export function Subtitle({text}) {
  return <span className={styles.subtitle}>{text}</span>
}