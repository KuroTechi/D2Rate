import styles from "./NotificationsButton.module.scss";
import Icon from "../../../UI/Icon";
const NotificationsButton = () => {
  return (
    <button
      className={styles["notifications-button"]}
      aria-label="Notifications"
    >
      <Icon
        name={"notifications"}
        className={styles["notifications-button__icon"]}
      />
    </button>
  );
};
export default NotificationsButton;
