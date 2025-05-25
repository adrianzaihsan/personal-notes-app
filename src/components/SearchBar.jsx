import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, setKeyword }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
};

export default SearchBar;
