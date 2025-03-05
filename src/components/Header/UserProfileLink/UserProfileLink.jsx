import styles from "./UserProfileLink.module.scss";

const UserProfileAvatar = () => {
  return (
    <a href="#" className={`${styles.link} border`}>
      <img
        className={styles.image}
        src={
          "https://i.pinimg.com/736x/51/75/e9/5175e946a6c28baf8312968a2ab74835.jpg"
        }
        alt="User Image"
        width="42"
        height="42"
      />
    </a>
  );
};

export default UserProfileAvatar;
