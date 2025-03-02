import styles from "./Section.module.scss";

export default function Section({ children, className, ariaLabelledby }) {
  return (
    <section
      className={`${styles.section} ${className}`}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
}
