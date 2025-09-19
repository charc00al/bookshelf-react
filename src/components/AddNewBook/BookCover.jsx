import styles from "./BookCover.module.css";

function BookCover() {
  return (
    <div className={styles.coverWrapper}>
      <img
        className={styles.bookCover}
        src="https://wallpapers.com/images/featured/blank-background-cq1lw4r7mte3btvt.jpg"
        alt=""
      />
      <img
        className={styles.bookCoverBlur}
        src="https://wallpapers.com/images/featured/blank-background-cq1lw4r7mte3btvt.jpg"
        alt=""
      />
    </div>
  );
}

export default BookCover;
