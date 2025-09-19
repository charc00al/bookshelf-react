import styles from "./Book.module.css";

function Book(props) {
  return (
    <div className={styles.book} onClick={props.onClick}>
      <img
        className={styles.bookCover}
        src="https://wallpapers.com/images/featured/blank-background-cq1lw4r7mte3btvt.jpg"
        alt=""
      />
      <p className={styles.author}> Ichiro Kishimi</p>
      <h3 className={styles.title}> The Courage to be disliked</h3>
    </div>
  );
}

export default Book;
