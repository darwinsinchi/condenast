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
    <div>
      {news.map((article, i) => (
        <div key={i}>
          <div>{article.title}</div>
        </div>
      ))}
      <p>HEEYYYY</p>
    </div>
  );
}

export default AllNews;
