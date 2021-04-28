import React, { useState } from 'react';
import "./Search.css";

export default function Searchbar({ setUrl, query, setQuery}) {
    const[inputValue, setInputValue] = useState( " ");

    function handleOnKeyDown({ keyCode }){
        if(keyCode === 13) {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
      }
    }

    function handleInputValue({target}){
        setInputValue(target.value);
    }

  return (
    <div>
        <input
            onKeyDown={handleOnKeyDown}
            onChange= {handleInputValue}
            type="text"
            value={query}
            placeholder="Search.."/>
        <button
            type="button"
            onClick={() =>
            setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
            <i className = "fa fa-search"></i>
        </button>

    </div>
  );
}
