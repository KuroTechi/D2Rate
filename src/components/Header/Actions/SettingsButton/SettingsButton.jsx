import styles from "./SettingsButton.module.scss";
import Icon from "../../../UI/Icon";
const SettingsButton = () => {
  return (
    <button className={styles["settings-button"]} aria-label="Settings">
      <Icon name={"settings"} className={styles["settings-button__icon"]} />
    </button>
  );
};
export default SettingsButton;
