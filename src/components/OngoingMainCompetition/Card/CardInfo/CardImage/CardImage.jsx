import styles from "./CardImage.module.scss";

export default function CardImage() {
  return (
    <img
      className={styles.image}
      src={
        "https://cdn.oneesports.gg/cdn-data/wp-content/uploads/2019/09/ONE_Dota2_Singapore_World_Pro_Invitational_webbanner.jpg"
      }
      alt=""
      width="278"
      height="112"
    />
  );
}
