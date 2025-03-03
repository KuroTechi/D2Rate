import styles from "./LeagueCard.module.scss";
import Info from "./Info/Info";
import { baseUrl } from "../../../../../../utils/urls/baseUrl";
export default function LeagueCard({ item }) {
  const image = item?.image
    ? item.image
    : `${baseUrl.images.leaguesPicture + "unknown.png"}`;

  return item?.date ? (
    <a className={styles.link}>
      <div className={`${styles.card} border`}>
        <img
          className={styles.image}
          src={image}
          alt={item.league || "League Preview"}
        />
        <Info title={item.league} date={item.date} prize={item.prize} />
      </div>
    </a>
  ) : null;
}
