import styles from "./BookReason.module.css";

function BookReason() {
  return (
    <textarea
      className={styles.bookReason}
      name="reason"
      id=""
      placeholder="reason to read"
    ></textarea>
  );
}

export default BookReason;
