import styles from "./NewBookSearch.module.css";

function NewBookSearch() {
  return (
    <form className={styles.newBookSearchForm} action="">
      <input type="text" name="input" placeholder="add new book" />
      <button type="submit">search</button>
    </form>
  );
}

export default NewBookSearch;
