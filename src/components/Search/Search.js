import React, { useState } from 'react';
import "./Search.css";

export default function Searchbar({ setUrl }) {
    const[inputValue, setInputValue] = useState( "");

    function handleOnKeyDown({ keyCode }){
        if(keyCode === 13) {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${inputValue}`)
      }
    }

    function handleInputValue({target}){
        setInputValue(target.value);
    }

  return (
    <div className="searchbar">
        <input
            onKeyDown={handleOnKeyDown}
            onChange={handleInputValue}
            type="text"
            value={inputValue}
            placeholder="Search.."
            />
        <button
            onClick={() =>
            setUrl(`http://hn.algolia.com/api/v1/search?query=${inputValue}`)
        }>
            <i className = "fa fa-search"></i>
        </button>

    </div>
  );
}
