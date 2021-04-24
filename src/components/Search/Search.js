import React, { useState } from "react";
import './Search.css';

export default function Search ({ news }) {
    const[inputValue, setInputValue] = useState( " ");
    const filteredArray = [];

    function handleOnKeyDown({ keyCode}){
        if(keyCode === 13){
            compareInput();
        }
    }

    function handleInputValue({target}){
        setInputValue(target.value);
    }

  function compareInput(){
    let searchString = inputValue.toLowerCase().split(' ')
    news.hits.filter(string => {
        let containsAtLeastOneWord = false;
        // If at least a word is matched return it!
        searchString.forEach(word => {
            if (string.title.toLowerCase().includes(word))
                containsAtLeastOneWord = true;
        })
        if (containsAtLeastOneWord){
            filteredArray.push(string);
        }

    }
    );
    console.log("string is ", filteredArray)
    return filteredArray;

  }

  return (
      <div>
              <input
              onKeyDown={handleOnKeyDown}
              onChange= {handleInputValue}
              type="text"
              placeholder="Search"/>
              <button onClick={compareInput}><i className = "fa fa-search"></i></button>
      </div>

);
}
