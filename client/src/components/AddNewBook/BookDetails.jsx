import styles from "./BookDetails.module.css";

function BookDetails(props) {

  function handleInputChange(event) {
    const {name, value} = event.target
    props.onChange(name, value)
  }

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={props.title}
        onChange={handleInputChange}
        placeholder="title"
      />
      <input
        className={styles.input}
        type="text"
        name="author"
        value={props.author}
        onChange={handleInputChange}
        placeholder="author"
      />
      <input
        className={styles.input}
        type="text"
        name="isbn"
        value={props.isbn}
        onChange={handleInputChange}
        placeholder="isbn"
      />
    </div>
  );
}

export default BookDetails;
