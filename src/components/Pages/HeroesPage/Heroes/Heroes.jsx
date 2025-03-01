import SectionHeader from "../../../blocks/SectionHeader/SectionHeader";
import styles from "./Heroes.module.scss";
import HeroesIcon from "../../../UI/icons/HeroesIcon";
import HeroesList from "./HeroesList/HeroesList";
export default function Heroes() {
  return (
    <main>
      <section className={styles.heroes} aria-labelledby="heroes">
        <SectionHeader
          className={styles.background}
          title={"Heroes"}
          id={"heroes"}
          icon={
            <HeroesIcon className="icon icon--extra-large icon--fill-white" />
          }
        />
        <HeroesList />
      </section>
    </main>
  );
}
