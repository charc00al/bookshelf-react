import styles from "./BookDetails.module.css";

function BookDetails() {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        className={styles.input}
        type="text"
        name="author"
        placeholder="author"
      />
      <input
        className={styles.input}
        type="text"
        name="isbn"
        placeholder="isbn"
      />
    </div>
  );
}

export default BookDetails;
