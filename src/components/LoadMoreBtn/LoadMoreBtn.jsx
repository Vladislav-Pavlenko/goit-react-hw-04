import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ handleClick }) {
  return (
    <button className={css.btn} onClick={handleClick}>
      Load more
    </button>
  );
}
