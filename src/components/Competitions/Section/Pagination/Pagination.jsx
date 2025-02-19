import ArrowLeftIcon from "../../../UI/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../UI/icons/ArrowRightIcon";
import styles from "./Pagination.module.scss";

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        <button
          className={`${styles.button} ${
            currentPage <= 1 ? "button--not-active" : ""
          } button`}
          disabled={currentPage <= 1}
          onClick={() => paginate(currentPage - 1)}
        >
          <ArrowLeftIcon />
        </button>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`${styles.item} ${
                currentPage === number ? styles.active : ""
              } tile`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          );
        })}
        <button
          className={`${styles.button} ${
            currentPage === pageNumbers.length ? "button--not-active" : ""
          } button`}
          disabled={currentPage === pageNumbers.length}
          onClick={() => paginate(currentPage + 1)}
        >
          <ArrowRightIcon />
        </button>
      </ul>
    </div>
  );
}
