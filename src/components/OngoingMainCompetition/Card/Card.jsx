import styles from "./Card.module.scss";
import CardHeader from "./CardHeader/CardHeader";
import CardInfo from "./CardInfo/CardInfo";
import CardFooter from "./CardFooter/CardFooter";

export default function Card() {
  return (
    <div className={styles.card}>
      <CardHeader />
      <CardInfo />
      <CardFooter />
    </div>
  );
}
