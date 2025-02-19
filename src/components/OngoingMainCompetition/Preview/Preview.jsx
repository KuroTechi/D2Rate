import styles from "./Preview.module.scss";
import bgImage from "./bgImage.jpg";

export default function Preview() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={bgImage}></img>
    </div>
  );
}
