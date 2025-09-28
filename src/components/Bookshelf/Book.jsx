import styles from "./Book.module.css";

function Book(props) {
  return (
    <div className={styles.book} onClick={props.onClick}>
      <img
        className={styles.bookCover}
        src="https://wallpapers.com/images/featured/blank-background-cq1lw4r7mte3btvt.jpg"
        alt=""
      />
      <p className={styles.author}> {props.author}</p>
      <h3 className={styles.title}> {props.title}</h3>
      <small className={styles.reason}>{props.reason}</small>
    </div>
  );
}

export default Book;
