import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />)
    // <input onChange={e => {
    //     this.setState({ searchField: e.target.value }, () => console.log(this.state))
    //   }} type="text" placeholder="search monsters" />

    //e => this.setState({ searchField: e.target.value })
