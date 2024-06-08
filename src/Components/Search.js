import React from 'react';
import { TextField } from '@mui/material';

const Search = ({ searchTerm, handleSearchChange }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearchChange}
      fullWidth
      margin="normal"
    />
  );
};

export default Search;
