import React, { useState, useEffect } from "react";
import './App.css';
import News from './components/News/News.js'
import Search from './components/Search/Search.js'


function App() {
  const [news, setNews] = useState([]);

useEffect(() => {
  const getNews = async () => {
  try {
    const response = await fetch('http://hn.algolia.com/api/v1/search?query=react');
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setNews(jsonResponse);
      return
    }
    throw new Error("Request Failed!");
  } catch (error) {
    console.log(error);
  }
};

getNews();
}, []);

  return (
    <div className="App">
        <h1>
          +++ Hacker News +++
        </h1>
        <Search news={news} />
        <News news={news} />
    </div>
  );
}

export default App;
