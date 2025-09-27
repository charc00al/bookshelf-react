import Header from "../components/Homepage/Header";
import BookDetails from "../components/AddNewBook/BookDetails";
import BookReason from "../components/AddNewBook/BookReason";
import StatusSelect from "../components/AddNewBook/StatusSelect";
import BookCover from "../components/AddNewBook/BookCover";
import AddBookButton from "../components/AddNewBook/AddBookButton";
import Stars from "../components/AddNewBook/Stars";
import Tags from "../components/AddNewBook/Tags";

import styles from "./AddNewBook.module.css";

function AddNewBook() {
  return (
    <>
      <Header />
      <main className={styles.addNewBookWrapper}>
        <h2 className={styles.newBookHeading}>Add new Book</h2>
        <form className={styles.form} action="" id="addNewBookForm">
          <BookDetails className={styles.addBookInput} />
          <BookReason className={styles.addBookInput} />
          <div className={styles.starsAndStatusWrapper}>
            <StatusSelect />
            <Stars />
          </div>
          <Tags />
        </form>
        <div className={styles.newBookCover}>
          <BookCover />
        </div>
        <div className={styles.addBookButton}>
          <AddBookButton />
        </div>
      </main>
    </>
  );
}

export default AddNewBook;
