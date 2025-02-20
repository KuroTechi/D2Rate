import styles from "./OngoingMainCompetition.module.scss";
import Card from "./Card/Card";
import Preview from "./Preview/Preview";
import Divider from "../UI/Divider";
export default function OngoingMainCompetition() {
  return (
    <>
      <section
        className={`${styles.ongoing} container`}
        aria-labelledby="ongoing-title"
      >
        <h1 className="visually-hidden" id="ongoing-title">
          Ongoing Main Competition
        </h1>
        <div className={styles.wrapper}>
          <Card />
          <Preview />
        </div>
      </section>
      <Divider />
    </>
  );
}
