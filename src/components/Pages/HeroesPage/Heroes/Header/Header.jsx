import styles from "./Header.module.scss";
import Divider from "../../../../UI/Divider.jsx";
export default function Header({ title, icon, className }) {
  return (
    <>
      <div className={`${styles.wrapper} ${className}`}>
        <div className={`${styles.header} container`}>
          <div className={styles.icon}>{icon}</div>
          <h1 className={styles.title} id={title}>
            {title}
          </h1>
        </div>
      </div>
      <Divider />
    </>
  );
}
