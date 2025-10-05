import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import styles from "./ViewToggle.module.css";

function ViewToggle({ onChange }) {
  const [view, setView] = useState("grid"); // default view

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      // avoid deselecting
      setView(nextView);
      onChange(nextView); // notify parent
    }
  };

  return (
    <ToggleButtonGroup
      className={styles.toggleGroup}
      value={view}
      exclusive
      onChange={handleChange}
      aria-label="view toggle"
      size="small"
      sx={{
        "& .MuiToggleButton-root": {
          borderRadius: "8px", // nice squareish shape
          width: "40px",
          height: "40px",
          border: "1px solid transparent",
          "&:hover": {
            border: "1px solid transparent", // no ugly hover outline
            backgroundColor: "rgba(0,0,0,0.05)", // optional subtle hover bg
          },
          "& .MuiSvgIcon-root": {
            color: "var(--whiteish)", // <-- your CSS variable here
          },
        },
      }}
    >
      <ToggleButton value="grid" aria-label="grid view">
        <GridViewIcon sx={{ color: "gray" }} />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list view">
        <ViewListIcon sx={{ color: "gray" }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ViewToggle;
