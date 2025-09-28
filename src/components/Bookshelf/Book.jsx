import styles from "./Book.module.css";
import classnames from "classnames";
import Stars from "../AddNewBook/Stars";
import { useState } from "react";

function Book(props) {
  const viewClass = classnames({
    [styles.bookGridView]: props.view === "grid",
    [styles.bookListView]: props.view === "list",
  });

  return (
    <div className={viewClass} onClick={props.onClick}>
      <img
        className={styles.bookCover}
        src="https://wallpapers.com/images/featured/blank-background-cq1lw4r7mte3btvt.jpg"
        alt=""
      />
      <section className={styles.textGrid}>
        <p className={styles.author}> {props.author}</p>
        <h3 className={styles.title}> {props.title}</h3>
        <small className={styles.reason}>{props.reason}</small>
        <small className={styles.notes}>{props.notes}</small>
        <div className={styles.stars}>
          {props.view === "list" && <Stars stars={props.stars} readOnly />}
        </div>
        {/* add id?, isbn, status, tags */}
      </section>
    </div>
  );
}

export default Book;
