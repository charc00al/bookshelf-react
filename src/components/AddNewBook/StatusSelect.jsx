import { useState } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import styles from "./StatusSelect.module.css"; // we’ll add custom styles here

function StatusSelect() {
  const [status, setStatus] = useState(""); // state for the select

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl className={styles.formControl}>
      <Select
        value={status}
        onChange={handleChange}
        displayEmpty
        className={styles.select}
        sx={{
          borderRadius: "30px",
          backgroundColor: "var(--whiteish)",
          color: "var(--green)",
          height: "2rem",
          width: "8rem",
          "& .MuiSelect-icon": { color: "var(--green)" },

          // remove border (normal, hover, focus)
          "& fieldset": { border: "none" },
          "&:hover fieldset": { border: "none" },
          "&.Mui-focused fieldset": { border: "none" },
        }}
      >
        <MenuItem value="" disabled>
          Status
        </MenuItem>
        <MenuItem value="want-to-read">Want to read</MenuItem>
        <MenuItem value="reading">Reading</MenuItem>
        <MenuItem value="finished">Finished</MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusSelect;
