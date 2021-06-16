import React, { useState, useEffect } from "react";

function AllNews() {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    try {
      const response = await fetch("/api");
      const jsonData = await response.json();
      setNews(jsonData.articles);
    } catch (error) {}
  };
  console.log(news);
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="articleWrapper">
      {news.map((article, i) => (
        <div className="allArticles" key={i}>
          <div className="articleInfo">
            <h4>Featured</h4>
            <h2>{article.title}</h2>
            <h4>{article.description}</h4>
          </div>
          <div>
            <img className="articleImg" src={article.urlToImage} alt="" />
          </div>
        </div>
      ))}
      <p>HEEYYYY</p>
    </div>
  );
}

export default AllNews;
