import styles from "./Heroes.module.scss";
import Section from "../../../blocks/Section/Section";
import SectionHeader from "../../../blocks/SectionHeader/SectionHeader";
import HeroesIcon from "../../../UI/icons/HeroesIcon";
import HeroesList from "./HeroesList/HeroesList";
export default function Heroes() {
  return (
    <main>
      <Section className={styles.heroes} aria-labelledby="heroes">
        <SectionHeader
          className={styles.background}
          title={"Heroes"}
          id={"heroes"}
          icon={
            <HeroesIcon className="icon icon--extra-large icon--fill-white" />
          }
        />
        <HeroesList />
      </Section>
    </main>
  );
}
