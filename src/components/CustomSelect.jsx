import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelect = ({ value, onChange, children }) => {
  return (
    <FormControl size="small" fullWidth={true} >
      <InputLabel htmlFor="age-helper">Search By</InputLabel>
      <Select name="Search By"
       value={value} onChange={onChange}>
        {children}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
