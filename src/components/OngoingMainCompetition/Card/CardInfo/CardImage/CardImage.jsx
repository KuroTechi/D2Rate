import styles from "./CardImage.module.scss";
import image from "./previewImageSmall.jpg";

export default function CardImage() {
  return (
    <img className={styles.image} src={image} alt="" width="278" height="112" />
  );
}
