import styles from "./ShowMetaHeroesButton.module.scss";
import MetaHeroIcon from "../../../../../UI/icons/MetaHeroIcon";
import { useState, useRef, useEffect } from "react";

export default function ShowMetaHeroesButton({ showMeta, handleShowMeta }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (showTooltip && tooltipRef.current) {
      const tooltip = tooltipRef.current;

      const tooltipRect = tooltip.getBoundingClientRect();

      if (tooltipRect.left < 0) {
        tooltip.style.left = "0";
        tooltip.style.transform = "translateX(0)";
      } else if (tooltipRect.right > window.innerWidth - 20) {
        tooltip.style.left = "auto";
        tooltip.style.right = "0";
        tooltip.style.transform = "translateX(0)";
      } else {
        tooltip.style.left = "50%";
        tooltip.style.transform = "translateX(-50%)";
      }
    }
  }, [showTooltip]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${
          showMeta ? styles.active : ""
        } button border`}
        onClick={() => {
          handleShowMeta(), setShowTooltip(false);
        }}
        aria-label={showMeta ? "Hide meta heroes" : "Show meta heroes"}
        aria-pressed={showMeta}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-describedby="tooltip"
      >
        <span>
          <MetaHeroIcon className={styles.icon} />
        </span>
      </button>

      {showTooltip && (
        <div
          className={styles.tooltip}
          id="tooltip"
          role="tooltip"
          aria-hidden={!showTooltip}
          ref={tooltipRef}
        >
          {showMeta ? "Hide meta heroes" : "Show meta heroes"}
        </div>
      )}
    </div>
  );
}
