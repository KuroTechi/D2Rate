import styles from "./Actions.module.scss";
import NotificationsButton from "./NotificationButton/NotificationsButton";
import SettingsButton from "./SettingsButton/SettingsButton";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <NotificationsButton />
      <SettingsButton />
    </div>
  );
};

export default Actions;
