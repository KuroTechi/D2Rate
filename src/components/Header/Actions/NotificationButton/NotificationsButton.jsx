import styles from "./NotificationsButton.module.scss";
import NotificationsIcon from "../../../UI/icons/NotificationsIcon";

const NotificationsButton = () => {
  return (
    <button className="button--interactive" aria-label="Notifications">
      <NotificationsIcon className="icon--interactive icon--default-color" />
    </button>
  );
};
export default NotificationsButton;
