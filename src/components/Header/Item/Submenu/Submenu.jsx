import { Link } from "react-router";
import styles from "./Submenu.module.scss";

const Submenu = ({ submenu }) => {
  return (
    <ul className={`${styles.submenu} border`}>
      {submenu.map((subItem) => (
        <li
          onClick={() => console.log(subItem.text)}
          className={styles.item}
          key={subItem.text}
        >
          <Link to={subItem.link} className={styles.link}>
            {subItem.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Submenu };
