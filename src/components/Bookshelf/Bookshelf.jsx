import Book from "./Book";
import styles from "./Bookshelf.module.css";

function Bookshelf(props) {
  return (
    <section className={styles.bookshelf}>
      <Book onClick={props.onClick} />
      {/* <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book /> */}
    </section>
  );
}

export default Bookshelf;
