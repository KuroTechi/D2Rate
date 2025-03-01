import styles from "./SectionHeader.module.scss";
import Divider from "../../UI/Divider";

export default function SectionHeader({ title, icon, className, id }) {
  return (
    <>
      <div className={`${styles.wrapper} ${className}`}>
        <div className={`${styles.header} container`}>
          <div className={styles.icon}>{icon}</div>
          <h1 className={styles.title} id={id}>
            {title}
          </h1>
        </div>
      </div>
      <Divider />
    </>
  );
}
