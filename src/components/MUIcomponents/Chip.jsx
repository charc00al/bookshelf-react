import Chip from "@mui/material/Chip";

function MyChip(props) {
  let chipColor = "var(--green)";
  let textColor = "white";
  let borderColor = "transparent";
  let chipVariant = "filled";

  if (props.type === "tag") {
    chipColor = "var(--green)";
  }

  if (props.type === "status") {
    if (props.label === "finished") {
      chipColor = "var(--dark-olive)";
    } else if (props.label === "reading") {
      chipColor = "var(--whiteish)";
      textColor = "var(--dark-grey)";
    } else {
      chipVariant = "outlined";
      chipColor = "var(--dark-grey)";
      borderColor = "var(--whiteish)";
    }
  }

  return (
    <Chip
      label={props.label}
      size="small"
      variant={chipVariant}
      sx={{
        backgroundColor: chipColor,
        color: textColor,
        borderColor: "var(--whiteish)",
      }}
    />
  );
}

export default MyChip;
