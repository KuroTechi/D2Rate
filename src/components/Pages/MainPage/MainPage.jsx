import styles from "./MainPage.module.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import OngoingMainCompetition from "../../OngoingMainCompetition/OngoingMainCompetition";

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <OngoingMainCompetition />
      </main>
      <Footer />
    </>
  );
}
