import React from "react";
import './News.css';

export default function News ({ news }) {
  console.log(news)
  return (
  <div>
    <ol>
    {news.length!==0 && news.hits.map((newsPost) => (
          <li key={newsPost.title}>
              <a href={newsPost.url} target="_blank" rel="noreferrer">
              {newsPost.title}
              </a>
          </li>
        ))}
    </ol>
  </div>
)}
