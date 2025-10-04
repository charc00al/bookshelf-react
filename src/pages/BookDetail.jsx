import Header from "../components/Homepage/Header";
import Book from "../components/Bookshelf/Book";
import Notes from "../components/Notes";
import styles from "./BookDetail.module.css";
import books from "../components/Bookshelf/books.json";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();

  const book = books.find((b) => b.id == id);

  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <section className={styles.bookDetailWrapper}>
        <div className={styles.book}>
          <Book
            view="detail"
            author={book.author}
            title={book.title}
            reason={book.reason}
            notes={book.notes}
            stars={book.stars}
            status={book.status}
            tags={book.tags}
          />
        </div>
        <div className={styles.btnChange}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className={styles.notes}>
          <Notes notes={book.notes} />
        </div>
        <div className={styles.btnAddNotes}>
          <button>Add Notes</button>
        </div>
      </section>
    </>
  );
}

export default BookDetail;
