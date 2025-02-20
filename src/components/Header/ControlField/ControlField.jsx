import styles from "./ControlField.module.scss";
import SearchIcon from "../../UI/icons/SearchIcon";

const ControlField = ({ placeholder = "Search" }) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default ControlField;
