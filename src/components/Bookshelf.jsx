import Book from "./Book";
import styles from './Bookshelf.module.css';

function Bookshelf() {
return (
    <section className={styles.bookshelf}>
        <Book/>
        <Book/>
        <Book/>
    </section>
)
}

export default Bookshelf