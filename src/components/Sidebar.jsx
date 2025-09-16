import styles from "./Sidebar.module.css";
import { IoSearchOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <form className={styles.bookshelfSearch} action="">
        <input
          className={styles.bookshelfSearchInput}
          type="text"
          name="input"
          placeholder="search bookshelf"
        />
        <button className={styles.bookshelfSearchButton} type="submit">
          <IoSearchOutline />
        </button>
      </form>
      <div className={styles.sidebarText}>
        <div className={styles.sidebarTextChunk}>
          <h4>Status</h4>
          <p>All Books</p>
          <p>Reading</p>
          <p>Wishlist</p>
          <p>Finished books</p>
        </div>
        <div className={styles.sidebarTextChunk}>
          <h4>Sort by</h4>
          <p>Date</p>
          <p>Reviews</p>
          <p>Status</p>
        </div>
        <div className={styles.sidebarTextChunk}>
          <h4>View</h4>
          <p>Tiles</p>
          <p>Content</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
