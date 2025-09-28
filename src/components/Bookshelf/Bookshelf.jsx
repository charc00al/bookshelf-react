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
      <ViewToggle
        className={styles.toggleWrapper}
        onChange={handleViewChange}
      />
      <section className={styles.bookshelf}>
        {view === "grid"
          ? books.map((book) => (
              <Book
                onClick={props.onClick}
                key={book.id}
                author={book.author}
                title={book.title}
              />
            ))
          : books.map((book) => (
              <Book
                onClick={props.onClick}
                key={book.id}
                author={book.author}
                title={book.title}
                reason={book.reason}
              />
            ))}
      </section>
    </div>
  );
}

export default Bookshelf;
