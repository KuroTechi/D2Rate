import Card from "../Card/Card";
import styles from "./Section.module.scss";
import Header from "./Header/Header";
import Pagination from "./Pagination/Pagination";
import { useState, useRef, useEffect } from "react";
export default function Section({ title, icon, items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);
  const itemsPerPage = 8;

  const isNoResults = !items || items.length === 0;
  const isPaginationVisible = !isNoResults && items.length > itemsPerPage;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = items?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    console.log("gbcr " + sectionRef.current.getBoundingClientRect().top);
    console.log("wScrlY " + window.scrollY);
    console.log(
      sectionRef.current.getBoundingClientRect().top + window.scrollY
    );

    if (sectionRef.current) {
      const offset = 20;
      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className={styles.section} ref={sectionRef}>
      <Header title={title} icon={icon} isButtonNotActive={isNoResults} />

      {isNoResults && <NoLeagues />}

      <div className={styles.list}>
        {currentItems?.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>

      {isPaginationVisible && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
      )}
    </div>
  );
}

const NoLeagues = () => <div className={styles.text}>No Leagues.</div>;
