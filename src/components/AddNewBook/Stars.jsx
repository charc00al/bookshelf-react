import { Rating } from "@mui/material";

function Stars() {
  return (
    <Rating
      name="size-medium"
      defaultValue={0}
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
