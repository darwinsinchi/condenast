import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllNews({ news }) {
  return (
    <div className="articleWrapper">
      {news.map((article, i) => (
        <div className="allArticles" key={i}>
          <Link
            className="links"
            to={`/article/${article.url}`}
            style={{ textDecoration: "none" }}
          >
            <div className="articleInfo">
              <h4>Featured</h4>
              <h2>{article.title}</h2>
              <h4>{article.description}</h4>
            </div>
            <div>
              <img className="articleImg" src={article.urlToImage} alt="" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllNews;
