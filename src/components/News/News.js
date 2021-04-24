import React from "react";

export default function News ({ news }) {
  console.log(news)
  return (
  <div>
    <ol>
    {news.length!==0 && news.hits.map((newsPost) => (
          <li key={newsPost.title}>
              {newsPost.title}
          </li>
        ))}
    </ol>
  </div>
)}
