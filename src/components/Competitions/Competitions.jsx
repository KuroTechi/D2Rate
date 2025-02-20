import OngoingIcon from "../UI/icons/OngoingIcon";
import UpcomingIcon from "../UI/icons/UpcomingIcon";
import CompletedIcon from "../UI/icons/CompletedIcon";
import Section from "./Section/Section";
import styles from "./Competitions.module.scss";

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
export default function Competitions() {
  return (
    <section
      className={`${styles.competitions} container`}
      aria-labelledby="competitions"
    >
      <h2 className="visually-hidden" id="competitions">
        All Competitions
      </h2>
      <div className={styles.wrapper}>
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
  );
}
