import Header from "../components/Homepage/Header";
import Book from "../components/Bookshelf/Book";
import Notes from "../components/Notes";
import styles from "./BookDetail.module.css";

function BookDetail() {
  const book = {
    id: 3,
    author: "George Orwell",
    title: "1984",
    isbn: "9780451524935",
    reason:
      "Fun and magical, a perfect escape. I grew up with this series, but I want to reread it as an adult and see how it holds up.",
    notes:
      "Reading it again feels nostalgic but also refreshing. Some parts are clearly aimed at kids, but the charm is still there. I notice little world-building details now that I never paid attention to as a child.",
    status: "finished",
    stars: 5,
    tags: ["dystopia", "classic", "politics"],
  };
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
