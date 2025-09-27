import Book from "./Book";
import ViewToggle from "./ViewToggle";
import styles from "./Bookshelf.module.css";
import { useState } from "react";

function Bookshelf(props) {
  const [view, setView] = useState("grid");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className={styles.bookshelfWrapper}>
      <ViewToggle
        className={styles.toggleWrapper}
        onChange={handleViewChange}
      />
      <section className={styles.bookshelf}>
        {view === "grid" ? (
          <div>
            <Book />
            <Book />
            <Book />
          </div>
        ) : (
          <Book />
        )}

        {/*         <Book onClick={props.onClick} />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book /> */}
      </section>
    </div>
  );
}

export default Bookshelf;
