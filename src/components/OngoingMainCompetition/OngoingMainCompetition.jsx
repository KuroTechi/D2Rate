import styles from "./OngoingMainCompetition.module.scss";
import Card from "./Card/Card";
import Preview from "./Preview/Preview";
import Divider from "../UI/Divider";
import Header from "../Pages/HeroesPage/Heroes/Header/Header";
import LeaguesIcon from "../UI/icons/LeaguesIcon";
export default function OngoingMainCompetition() {
  return (
    <>
      <section className={`${styles.ongoing}`} aria-labelledby="ongoing-title">
        <h1 className="visually-hidden" id="ongoing-title">
          Ongoing Main Competition
        </h1>
        <Header
          title={"Leagues"}
          icon={
            <LeaguesIcon className="icon icon--extra-large icon--fill-white" />
          }
        />
        <div className={`${styles.wrapper} container`}>
          <Card />
        </div>
      </section>
      <Divider />
    </>
  );
}
