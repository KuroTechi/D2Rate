import styles from "./CardInfo.module.scss";
import DateIcon from "../../../UI/icons/DateIcon";
import PrizeIcon from "../../../UI/icons/PrizeIcon";
import MembersIcon from "../../../UI/icons/MembersIcon";
import CardImage from "./CardImage/CardImage";

export default function CardInfo() {
  return (
    <>
      <Info>
        <CardImage />
        <Prize />
        <Members />
        <Date />
      </Info>
    </>
  );
}

const Info = ({ children }) => {
  return <div className={styles.info}>{children}</div>;
};

const Prize = () => {
  return (
    <div className={`${styles.prize} tile`}>
      <PrizeIcon className="icon--medium icon--yellow-color" />
      <span className={styles.label}>Prize: </span>
      $500,000
    </div>
  );
};

const Members = () => {
  return (
    <div className={`${styles.members} tile`}>
      <MembersIcon className="icon--medium icon--default-color" />
      <span>18</span>
    </div>
  );
};

const Date = () => {
  return (
    <div className={`${styles.date} tile`}>
      <DateIcon className="icon--medium icon--default-color" />
      <span>Feb 20 – Mar 06</span>
    </div>
  );
};
