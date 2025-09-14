// components
import Header from "./components/Header";
import Book from "./components/Book";

// styles
import styles from './styles/Bookshelf.module.css';

// App
function App() {
  return (
    <div>
      <Header/>
      <section className={styles.bookshelf}>
        <Book/>
        <Book/>
        <Book/>
      </section>

    </div>
  )
}
export default App
