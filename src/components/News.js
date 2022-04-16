import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News =  (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


 const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `NewsEagle - ${capitalizeFirstLetter(
      props.category
    )}`;

  

 const  updateNews = async () => {
    props.setProgress(10);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=01d3af45436b43cc8c2c6f6f602c316d&page=${page}&pageSize=${props.pageSize}`
    )
      .then((res) => res.json())
      .then((json) => {
       setArticles(json.articles)
       setTotalResults(json.totalResults)
       setLoading(true)
      });
     props.setProgress(100);
  };
 

  useEffect(() => {
    updateNews();
    
  }, [])
  
 
  
 
 const  fetchMoreData = async () => {
    
    setPage(page+1)
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=01d3af45436b43cc8c2c6f6f602c316d&page=${page+1}&pageSize=${props.pageSize}`
    )
      .then((res) => res.json())
      .then((json) => {
        setArticles(articles.concat(json.articles))
        setTotalResults(json.totalResults)
        setLoading(true)
         
      });
  };


    return (
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {props.heading}
            </h1>
          </div>
        </header>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-4">
            {articles.map((element) => (
              <div className="flex">
                <NewsItem
                  key={element.url}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      
      </>
    );
  
}
 News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};
export default News;
