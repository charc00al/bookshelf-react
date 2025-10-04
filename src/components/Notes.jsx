import styles from "./Notes.module.css";

function Notes(props) {
  return (
    <form action="">
      <textarea className={styles.notesTextarea} name="" id="">
        {props.notes}
      </textarea>
    </form>
  );
}

export default Notes;
