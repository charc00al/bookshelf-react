import { Link } from "react-router-dom";
import styles from "./NewBookSearch.module.css";

function NewBookSearch() {
  return (
    <form className={styles.newBookSearchForm} action="">
      <input type="text" name="input" placeholder="add new book" />
      <Link to="/find-new-book">
        <button type="submit">search</button>
      </Link>
    </form>
  );
}

export default NewBookSearch;
