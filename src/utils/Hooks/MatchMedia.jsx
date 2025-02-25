import { useState, useEffect } from "react";

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
  laptop: "(max-width:1440.98px)",
  tablet: "(max-width:1140.98px)",
  mobile: "(max-width:767.98px)",
  mobileSmall: "(max-width:375.98px)",
};

export { useMediaQuery, media };
