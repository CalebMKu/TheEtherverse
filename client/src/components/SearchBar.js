import { Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ search, setSearch, onFocus }) => {
  return (
    <Input
      value={search}
      onFocus={onFocus}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search transactions by transaction number..."
      border="1px"
      borderColor="gray.300"
      size="lg"
    />
  );
};

export default SearchBar;
