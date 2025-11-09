import styles from "./BookCover.module.css";

function BookCover(props) {
  return (
    <div className={styles.coverWrapper}>
      <img
        className={styles.bookCover}
        src={props.coverImg}
        alt=""
      />
      <img
        className={styles.bookCoverBlur}
        src={props.coverImg}
        alt=""
      />
    </div>
  );
}

export default BookCover;
