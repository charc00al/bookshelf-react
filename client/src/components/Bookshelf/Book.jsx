import styles from "./Book.module.css";
import classnames from "classnames";
import Stars from "../AddNewBook/Stars";
import MyChip from "../MUIcomponents/Chip";
import Stack from "@mui/material/Stack";

function Book(props) {
  const viewClass = classnames({
    [styles.bookGridView]: props.view === "grid",
    [styles.bookListView]: props.view === "list",
    [styles.bookDetailView]: props.view === "detail",
  });

  return (
    <div className={viewClass} onClick={props.onClick}>
      <img
        className={styles.bookCover}
        src="https://wallpapers.com/images/featured/blank-background-cq1lw4r7mte3btvt.jpg"
        alt=""
      />
      <section className={styles.textGrid}>
        <p className={styles.author}> {props.author}</p>
        <h3 className={styles.title}> {props.title}</h3>
        <small className={styles.reason}>{props.reason}</small>
        <small className={styles.notes}>{props.notes}</small>

        {(props.view === "list" || props.view === "detail") && (
          <div className={styles.starsAndChips}>
            <div className={styles.chips}>
              <MyChip label={props.status} type="status" />
              <Stack direction={"row"} spacing={1}>
                {props.tags.map((tag, index) => (
                  <MyChip key={index} label={tag} type="tag" />
                ))}
              </Stack>
            </div>
            <Stars stars={props.stars} readOnly />
          </div>
        )}
      </section>
    </div>
  );
}

export default Book;
