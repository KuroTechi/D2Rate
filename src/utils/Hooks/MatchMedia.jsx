import { useState, useEffect } from "react";
import pxToRem from "../pxToRem.js";
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const media = {
  laptop: `(max-width:${pxToRem(1440.98)}rem)`,
  tablet: `(max-width:${pxToRem(1140.98)}rem)`,

  mobile: `(max-width:${pxToRem(767.98)}rem)`,
  mobileSmall: `(max-width:${pxToRem(375.98)}rem)`,
};

export { useMediaQuery, media };
