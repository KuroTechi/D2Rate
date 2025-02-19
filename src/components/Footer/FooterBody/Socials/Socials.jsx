import styles from "./Socials.module.scss";
import TwitterIcon from "../../../UI/icons/TwitterIcon";
import FacebookIcon from "../../../UI/icons/FacebookIcon";
import InstagramIcon from "../../../UI/icons/InstagramIcon";
import YoutubeIcon from "../../../UI/icons/YoutubeIcon";
export default function Socials() {
  return (
    <div className={` ${styles["soc1als"]}`}>
      <ul className={styles["soc1als__list"]}>
        <SocialsItem name={"Twitter"}>
          <TwitterIcon />
        </SocialsItem>
        <SocialsItem name={"Facebook"}>
          <FacebookIcon />
        </SocialsItem>
        <SocialsItem name={"Instagram"}>
          <InstagramIcon />
        </SocialsItem>
        <SocialsItem name={"Youtube"}>
          <YoutubeIcon />
        </SocialsItem>
      </ul>
    </div>
  );
}

const SocialsItem = ({ name, children }) => {
  return (
    <li className={styles["soc1als__item"]}>
      <a
        className={styles["soc1als__link"]}
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
