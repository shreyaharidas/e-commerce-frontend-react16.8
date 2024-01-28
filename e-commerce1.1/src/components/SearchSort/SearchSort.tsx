import React, { useEffect, useState } from "react";
import { Button, Container, Dropdown, DropdownItem, DropdownMenu } from "react-bootstrap";
import styles from "./SearchSort.module.css"

const CustomSearchBar = ({
  setSearch,
  setSorting,
  setSortBy,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSorting: React.Dispatch<React.SetStateAction<1 | -1>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [sortDirection, setSortDirection] = useState(true);

  useEffect(() => {
    setSorting(sortDirection === true ? 1 : -1);
  }, [sortDirection]);

  return (
    <Container fluid className={`${styles["custom-search-bar-container"]}`}>
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
    />
<select defaultValue={"product_name"}onChange={(e)=>setSortBy(e.target.value)}>
    <option selected value={"product_name"}>Name</option>
    <option value={"product_category"}>Category</option>
</select>
      <Button  variant="primary" onClick={(e) => setSortDirection((prev) => !prev)}>
        Sort {sortDirection === true ? "Ascending" : "Descending"}
      </Button>
    </Container>
  );
};

export default CustomSearchBar;
