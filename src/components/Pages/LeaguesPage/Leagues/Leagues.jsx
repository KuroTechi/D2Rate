import Header from "../../HeroesPage/Heroes/Header/Header";
import styles from "./Leagues.module.scss";
import LeaguesIcon from "../../../UI/icons/LeaguesIcon";
import Section from "./Section/Section";
import OngoingIcon from "../../../UI/icons/OngoingIcon";
import UpcomingIcon from "../../../UI/icons/UpcomingIcon";
import CompletedIcon from "../../../UI/icons/CompletedIcon";
import OngoingMainCompetition from "../../../OngoingMainCompetition/OngoingMainCompetition";

export default function Leagues() {
  const one = [
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/17233.png",
      league: "Destiny League",
      date: "28 Sep - 31 Dec",
      prize: "15 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/16313.png",
      league: "Ancients League",
      date: "30 Oct - 01 Mar",
      prize: "16 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/17366.png",
      league: "Ultras Dota Pro League  2024-25",
      date: "31 Oct - 31 Oct",
      prize: "10 000",
    },
  ];
  const two = null;
  const three = [
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/17233.png",
      league: "Destiny League",
      date: "28 Sep - 31 Dec",
      prize: "15 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/16313.png",
      league: "Ancients League",
      date: "30 Oct - 01 Mar",
      prize: "16 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/17366.png",
      league: "Ultras Dota Pro League  2024-25",
      date: "31 Oct - 31 Oct",
      prize: "10 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/17233.png",
      league: "Destiny League",
      date: "28 Sep - 31 Dec",
      prize: "15 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/16313.png",
      league: "Ancients League",
      date: "30 Oct - 01 Mar",
      prize: "16 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/17366.png",
      league: "Ultras Dota Pro League  2024-25",
      date: "31 Oct - 31 Oct",
      prize: "10 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/17233.png",
      league: "Destiny League",
      date: "28 Sep - 31 Dec",
      prize: "15 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/16313.png",
      league: "Ancients League",
      date: "30 Oct - 01 Mar",
      prize: "16 000",
    },
    {
      image: "https://cdn.stratz.com/images/dota2/leagues/17366.png",
      league: "Ultras Dota Pro League  2024-25",
      date: "31 Oct - 31 Oct",
      prize: "10 000",
    },
  ];
  return (
    <main>
      <section className={styles.leagues} aria-labelledby="leagues">
        <Header
          title={"leagues"}
          icon={
            <LeaguesIcon className="icon icon--extra-large icon--fill-white decorative" />
          }
        />
        <div className={`${styles.wrapper} container`}>
          <Section
            title={"Ongoing"}
            icon={<OngoingIcon className="icon--large icon--green-color" />}
            items={one}
          />
          <Section
            title={"Upcoming"}
            icon={<UpcomingIcon className="icon--large icon--yellow-color" />}
            items={two}
          />
          <Section
            title={"Completed"}
            icon={<CompletedIcon className="icon--large icon--default-color" />}
            items={three}
          />
        </div>
      </section>
    </main>
  );
}
