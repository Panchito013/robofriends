import React from 'react';



const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input
            className="br4 pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search Robots" 
            onChange={searchChange}
            />
        </div>
    );
}



export default SearchBox;