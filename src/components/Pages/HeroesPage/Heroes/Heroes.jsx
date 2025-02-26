import Header from "./Header/Header";
import styles from "./Heroes.module.scss";
import HeroesIcon from "../../../UI/icons/HeroesIcon";
import HeroesList from "./HeroesList/HeroesList";
export default function Heroes() {
  return (
    <main>
      <section className={styles.heroes} aria-labelledby="heroes">
        <Header
          className={styles.background}
          title={"heroes"}
          icon={
            <HeroesIcon className="icon icon--extra-large icon--fill-white" />
          }
        />
        <HeroesList />
      </section>
    </main>
  );
}
