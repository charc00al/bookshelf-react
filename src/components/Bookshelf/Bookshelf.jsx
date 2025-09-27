import Book from "./Book";
import ViewToggle from "./ViewToggle";
import styles from "./Bookshelf.module.css";

function Bookshelf(props) {
  return (
    <div className={styles.bookshelfWrapper}>
      <ViewToggle className={styles.toggleWrapper} />
      <section className={styles.bookshelf}>
        <Book onClick={props.onClick} />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
}

export default Bookshelf;
