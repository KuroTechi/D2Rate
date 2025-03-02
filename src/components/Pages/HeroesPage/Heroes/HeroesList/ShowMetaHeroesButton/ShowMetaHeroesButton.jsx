import styles from "./ShowMetaHeroesButton.module.scss";
import MetaHeroIcon from "../../../../../UI/icons/MetaHeroIcon";

export default function ShowMetaHeroesButton({ showMeta, handleShowMeta }) {
  return (
    <button
      className={`${styles.button} ${
        showMeta ? styles.active : ""
      } button border`}
      onClick={handleShowMeta}
      aria-label={showMeta ? "Hide meta heroes" : "Show meta heroes"}
      aria-pressed={showMeta}
    >
      <span>
        <MetaHeroIcon className={styles.icon} />
      </span>
    </button>
  );
}
