import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    axios
      .request({
        method: "GET",
        url: "https://crypto-news-live3.p.rapidapi.com/news",
        headers: {
          "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        },
      })
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return news.map((a, idx) => <Article key={idx} article={a} />).slice(0, 10);
};

export default Articles;
