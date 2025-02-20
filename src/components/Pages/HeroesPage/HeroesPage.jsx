import styles from "./HeroesPage.module.scss";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Heroes from "./Heroes/Heroes";

export default function HeroesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Heroes />
      </main>
      <Footer />
    </>
  );
}
