import styles from "./MainPage.module.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import OngoingMainCompetition from "../../OngoingMainCompetition/OngoingMainCompetition";
import Competitions from "../../Competitions/Competitions";
export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <OngoingMainCompetition />
        <Competitions />
      </main>
      <Footer />
    </>
  );
}
