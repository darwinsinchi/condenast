import React from "react";
import AllNews from "../components/AllNews";
import { Route, Switch } from "react-router-dom";

function MainPage() {
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
    <div className="MainPage">
      <Switch>
        <Route exact path="/">
          <AllNews news={news} />
        </Route>
        <Route path="/article/:url">
          {/* <SingleArticle news={news} /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default MainPage;
