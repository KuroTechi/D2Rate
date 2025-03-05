import styles from "./Socials.module.scss";
import TwitterIcon from "../../../UI/icons/TwitterIcon";
import FacebookIcon from "../../../UI/icons/FacebookIcon";
import InstagramIcon from "../../../UI/icons/InstagramIcon";
import YoutubeIcon from "../../../UI/icons/YoutubeIcon";
export default function Socials() {
  return (
    <div className={styles.soc1als}>
      <ul className={styles.list}>
        <SocialsItem name={"Twitter"}>
          <TwitterIcon className={styles.icon} />
        </SocialsItem>
        <SocialsItem name={"Facebook"}>
          <FacebookIcon className={styles.icon} />
        </SocialsItem>
        <SocialsItem name={"Instagram"}>
          <InstagramIcon className={styles.icon} />
        </SocialsItem>
        <SocialsItem name={"Youtube"}>
          <YoutubeIcon className={styles.icon} />
        </SocialsItem>
      </ul>
    </div>
  );
}

const SocialsItem = ({ name, children }) => {
  return (
    <li className={styles.item}>
      <a
        className={styles.link}
        href="/"
        target="_blank"
        aria-label={name}
        id={name}
      >
        {children}
      </a>
    </li>
  );
};
