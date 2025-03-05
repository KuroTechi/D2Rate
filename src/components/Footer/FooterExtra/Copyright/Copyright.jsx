import styles from "./Copyright.module.scss";
import { memo, useMemo } from "react";

const Copyright = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <p className={styles.copyright}>
      © <time dateTime={currentYear.toString()}>{currentYear}</time> D2Rate.
      Inc. All rights reserved.
    </p>
  );
});

export default Copyright;
