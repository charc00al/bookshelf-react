import styles from "./BookReason.module.css";

function BookReason({propValue, onChange}) {

  return (
    <textarea
      className={styles.bookReason}
      name="reason"
      id=""
      placeholder="reason to read"
      value={propValue}
      onChange={(event) => 
        onChange(event.target.value)
      }
    ></textarea>
  );
}

export default BookReason;
