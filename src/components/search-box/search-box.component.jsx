import React from 'react';
import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input type='search'
            onChange={handleChange}
            placeholder={placeholder}
            className="search" />

    );
}

export default SearchBox;