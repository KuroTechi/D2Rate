import ImageNotFoundIcon from "../../../../UI/icons/ImageNotFoundIcon";
import styles from "./TeamList.module.scss";

export default function TeamsList() {
  return (
    <ul className={`${styles.teams} tile`}>
      <Team
        image={
          "https://seeklogo.com/images/L/lgd-gaming-new-logo-EA9078D89F-seeklogo.com.png"
        }
      />
      <li className={styles.text}>VS</li>
      <Team
        image={
          "https://images.seeklogo.com/logo-png/43/2/tampa-bay-lightning-logo-png_seeklogo-434707.png"
        }
      />
    </ul>
  );
}

const Team = ({ image }) => {
  return (
    <li className={styles.team}>
      <a className={styles.link}>
        <img
          className={styles.logo}
          src={image}
          height="40"
          width="40"
          loading="lazy"
        />
      </a>
    </li>
  );
};
const ImageNotFound = () => {
  return (
    <li className={styles.team}>
      <a className={styles.link}>
        <ImageNotFoundIcon className={styles.logo} />
      </a>
    </li>
  );
};
