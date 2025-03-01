import styles from "./RouteError.module.scss";
import SectionHeader from "../../../blocks/SectionHeader/SectionHeader";
import RouteErrorIcon from "../../../UI/icons/RouteErrorIcon";
import WarningIcon from "../../../UI/icons/WarningIcon";
import DiscordIcon from "../../../UI/icons/DiscordIcon";

export default function RouteError({ isCodeError, errorMessage }) {
  return (
    <main>
      <section
        className={styles.notfound}
        aria-labelledby={isCodeError ? "applicationError" : "pageNotFound"}
      >
        <SectionHeader
          className={styles.background}
          title={isCodeError ? "Application Error" : "Page not found"}
          id={isCodeError ? "applicationError" : "pageNotFound"}
          icon={
            <RouteErrorIcon className="icon icon--extra-large icon--red-color" />
          }
        />
        <div className={`${styles.container} container`}>
          <div className={styles.body}>
            <div className={styles.info}>
              <div className={styles.wrapper}>
                <WarningIcon className="icon icon--default icon--fill-red" />
                <h2 className={styles.title}>Something went wrong</h2>
              </div>
              <span className={styles.description}>
                {isCodeError
                  ? `An error occurred in the application: ${errorMessage}. Please report this issue on Discord.`
                  : "The page you are trying to visit does not exist. If you think this page should exist, please give us to know on Discord."}
              </span>
            </div>
            <div className={styles.actions}>
              <a className={`${styles.link} button border`}>
                <DiscordIcon className="icon icon--small icon--fill-light-white" />
                Let us know
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
