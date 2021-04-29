import React from "react";
import "./News.css";

export default function News({ news, isLoading }) {
  // console.log(news)
  return (
    <div>

        {isLoading ? (
         <div>
         <p>Loading news...</p>
         <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
         </div>
        ) : (
        <ol>
        {news.hits.length !==0 ? (news.hits.map((newsPost) => (
          <li key={newsPost.objectID}>
              <a href={newsPost.url} target="_blank" rel="noreferrer">
              {newsPost.title}
              </a>
          </li>
        ))) :
        (
          <p>Try again</p>
        )
      }
      </ol>
      )}
    </div>
    );
}
