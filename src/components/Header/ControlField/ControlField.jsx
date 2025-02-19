import styles from "./ControlField.module.scss";
import Icon from "../../UI/Icon";
const ControlField = ({ placeholder = "Search" }) => {
  return (
    <div className={`${styles["field-wrapper"]} field`}>
      <Icon name={"search"} className={styles["field--icon-left"]} />
      <input className={styles["field__input"]} placeholder={placeholder} />
    </div>
  );
};

export default ControlField;
