import Book from "./Book";
import ViewToggle from "./ViewToggle";
import styles from "./Bookshelf.module.css";
import { useState } from "react";

import books from "./books.json";

function Bookshelf(props) {
  const [view, setView] = useState("grid");

  const handleViewChange = (newView) => {
    setView(newView);
    console.log(books);
  };

  return (
    <div className={styles.bookshelfWrapper}>
      <div className={styles.toggleWrapper}>
        <ViewToggle onChange={handleViewChange} />
      </div>

      {view === "grid" ? (
        <section className={styles.bookshelfGrid}>
          {books.map((book) => (
            <Book
              view={view}
              onClick={props.onClick}
              key={book.id}
              author={book.author}
              title={book.title}
            />
          ))}
        </section>
      ) : (
        <section className={styles.bookshelfList}>
          {books.map((book) => (
            <Book
              view={view}
              onClick={props.onClick}
              // book db properties
              key={book.id}
              author={book.author}
              title={book.title}
              reason={book.reason}
              notes={book.notes}
              stars={book.stars}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default Bookshelf;
