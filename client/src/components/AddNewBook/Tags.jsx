import { useState } from "react";
import { TextField, Autocomplete, Chip } from "@mui/material";

function Tags() {
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState(["fantasy", "sci-Fi", "romance"]);

  return (
    <Autocomplete
      multiple
      freeSolo
      options={options}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        newValue.forEach((tag) => {
          if (!options.includes(tag)) {
            setOptions((prev) => [...prev, tag]);
          }
        });
      }}
      disableClearable
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
            sx={{
              borderRadius: "30px",
              background: "var(--green)",
              color: "white",
              fontFamily: "poppinsLight, sans-serif",
            }}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="tags"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              background: "var(--grey)",
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "none" },
              "& input::placeholder": {
                color: "var(--whiteish)", // 👈 placeholder color
                opacity: 1, // ensure it shows
              },
              fontFamily: "poppinsLight, sans-serif", // 👈 font
              paddingLeft: "2rem", // 👈 padding inside
              color: "white",
              padding: "2px 10px",
              width: "20vw",
            },
          }}
        />
      )}
    />
  );
}

export default Tags;
