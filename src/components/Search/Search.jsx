import React from "react";

import { SearchInput } from "./Search.Elements";

const Search = ({ value, onChange, handleTeste, placeholder }) => {
  return (
    <div>
      <SearchInput
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;
