import Header from "./Header/Header";
import styles from "./Heroes.module.scss";
import HeroesIcon from "../../../UI/icons/HeroesIcon";
import HeroesList from "./HeroesList/HeroesList";
export default function Heroes() {
  return (
    <section className={styles.heroes} aria-labelledby="heroes">
      <Header
        title={"heroes"}
        icon={
          <HeroesIcon className="icon icon--extra-large icon--fill-white" />
        }
      />
      <HeroesList />
    </section>
  );
}
