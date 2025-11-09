import { Rating } from "@mui/material";

function Stars(props) {
  return (
    <Rating
      name="size-medium"
      value={props.propValue}
      onChange={(event) => 
        props.onChange(event.target.value)
      }
      defaultValue={props.stars}
      readOnly={props.readOnly}
      sx={{
        color: "#f5b50a",
        "& .MuiRating-iconEmpty": {
          color: "rgb(213, 213, 213)",
        },
      }}
    />
  );
}

export default Stars;
