import Header from "../components/Homepage/Header";
import BookDetails from "../components/AddNewBook/BookDetails";
import BookReason from "../components/AddNewBook/BookReason";
import StatusSelect from "../components/AddNewBook/StatusSelect";
import BookCover from "../components/AddNewBook/BookCover";
import AddBookButton from "../components/AddNewBook/AddBookButton";
import Stars from "../components/AddNewBook/Stars";
import Tags from "../components/AddNewBook/Tags";

import styles from "./AddNewBook.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function AddNewBook() {
  
  const bookCoverImg = "https://wallpapers.com/images/featured/blank-background-cq1lw4r7mte3btvt.jpg"

  async function handleSubmit(event) {
    event.preventDefault();
    //console.log(bookData)
    
    try {
      const res = await axios.post("/api/books", bookData)
      console.log("FE got response:", res.data)
    } catch (error) {
      console.error("FE error:", error)
    }
  }

  // create book state
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    isbn: "",
    reason: "",
    status: "",
    stars: "",
    tags: [],
    bookCover: bookCoverImg
  })


  // update book state from form data
  function handleChange(name, propValue) {
    setBookData((prev) => ({...prev,[name]: propValue}))
  }

  return (
    <>
      <Header />
      <main className={styles.addNewBookWrapper}>
        <h2 className={styles.newBookHeading}>Add new Book</h2>
        <form className={styles.form} onSubmit={handleSubmit} action="" id="addNewBookForm">
          <BookDetails 
            className={styles.addBookInput} 
            title={bookData.title} 
            author={bookData.author} 
            isbn={bookData.isbn}
            onChange={(name, val) => {handleChange(name, val)}}
          />
          <BookReason 
            className={styles.addBookInput} 
            propValue={bookData.reason} 
            onChange={(val) => {handleChange("reason", val)}}
          />
          <div className={styles.starsAndStatusWrapper}>
            <StatusSelect 
              propValue={bookData.reason}  
              onChange={(val) => {handleChange("status", val)}} 
            />
            <Stars 
              propValue={bookData.stars} 
              onChange={(val) => {handleChange("stars", val)}}
            />
          </div>
          <Tags 
            propValue={bookData.tags} 
            onChange={(val) => {handleChange("tags", val)}}
            />
        </form>
        <div className={styles.newBookCover}>
          <BookCover 
            coverImg={bookCoverImg}
          />
        </div>
        <div className={styles.addBookButton}>
          <AddBookButton />
        </div>
      </main>
    </>
  );
}

export default AddNewBook;
