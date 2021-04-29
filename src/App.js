import React, { useState, useEffect } from "react";
import './App.css';
import News from './components/News/News.js'
import Searchbar from './components/Search/Search.js'

function App() {
  const [news, setNews] = useState({ hits: []});
  //const [query, setQuery] = useState('');
  const [url, setUrl] = useState(
  'https://hn.algolia.com/api/v1/search?query=react',
);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getNews = async () => {
    setIsLoading(true);
    try {
     const response = await fetch(url)
       if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setNews(jsonResponse);
        setIsLoading(false);
        return;
      }
      throw new Error("Request Failed!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };
  getNews();
}, [url]);
  return (
    <div className="App">
      <header className="App-header">
        +++ HACKER NEWS +++
      </header>
      <main>
      <Searchbar news={news} url={url} setUrl={setUrl}/>
      <News news={news} isLoading={isLoading}/>
      </main>
      <footer>
        <p>© 2021</p>
      </footer>
    </div>
  );
}

export default App;
