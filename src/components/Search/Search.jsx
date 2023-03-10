import React from "react";

import { SearchInput } from "./Search.Elements";

const Search = ({ value, onChange, handleTeste }) => {
  return (
    <div>
      <SearchInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;
