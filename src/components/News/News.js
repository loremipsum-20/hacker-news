import React from "react";
import "./News.css";

export default function News({ news, isLoading }) {
  console.log(news)
  return (
    <div>
        <h2>Results</h2>

        {isLoading ? (
         <div>Loading news...</div>
        ) : (
        <ul>
        {news.length!==0 && news.hits.map((newsPost) => (
          <li key={newsPost.objectID}>
              <a href={newsPost.url} target="_blank" rel="noreferrer">
              {newsPost.title}
              </a>
          </li>
        ))}
      </ul>
      )}
    </div>
    );
}
