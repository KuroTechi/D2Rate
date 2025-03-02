import styles from "./Section.module.scss";

export default function Section({ children, className, ariaLabelledBy }) {
  return (
    <section
      className={`${styles.section} ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}
