import styles from "./Actions.module.scss";
import ControlField from "../ControlField/ControlField";
import Icon from "../../UI/Icon";
import NotificationsButton from "./NotificationButton/NotificationsButton";
import SettingsButton from "./SettingsButton/SettingsButton";
const Actions = () => {
  return (
    <div className={styles["actions"]}>
      <NotificationsButton />
      <SettingsButton />
    </div>
  );
};

export default Actions;
