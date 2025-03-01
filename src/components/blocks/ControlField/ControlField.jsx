import styles from "./ControlField.module.scss";
import SearchIcon from "../../UI/icons/SearchIcon";

const ControlField = ({
  className,
  placeholder = "Search",
  ariaLabel,
  type = "text",
  name = "",
  maxLength,
  value,
  onChange,
}) => {
  return (
    <div className={`${styles.wrapper} ${className} border`}>
      <SearchIcon className={styles.icon} />
      <input
        className={styles.input}
        placeholder={placeholder}
        aria-label={ariaLabel}
        type={type}
        name={name}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ControlField;
