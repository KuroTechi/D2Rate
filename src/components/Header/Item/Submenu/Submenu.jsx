import styles from "./Submenu.module.scss";

const Submenu = ({ submenu }) => {
  return (
    <ul className={styles.submenu}>
      {submenu.map((subItem) => (
        <li
          onClick={() => console.log(subItem.text)}
          className={styles.item}
          key={subItem.text}
        >
          <a className={styles.link} href={subItem.link}>
            {subItem.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { Submenu };
