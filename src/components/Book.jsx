import styles from '../components/Book.module.css';

function Book() {

    return (
        <div className={styles.book}>
            <img className={styles.bookCover} src="https://www.humaneworld.org/sites/default/files/styles/responsive_3_4_500w/public/2022-07/kitten-playing-575035.jpg.webp?itok=6JOrIuo1" alt="" />
            <p class="author"> Author</p>
            <h3 class="title"> Title</h3>
        </div>

    )


}

export default Book