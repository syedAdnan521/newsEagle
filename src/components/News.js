import React, { Component } from "react";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsEagle - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  updateNews = async () => {
    this.props.setProgress(10);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=01d3af45436b43cc8c2c6f6f602c316d&page=${this.state.page}&pageSize=${this.props.pageSize}`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json.articles,
          totalResults: json.totalResults,
          loading: true,
        });
      });
    this.props.setProgress(100);
  };

  componentDidMount() {
    this.updateNews();
  }
  static getDrivedStateFromError(error) {
    this.setState({
      loading: true,
      error,
    });
  }

  // handlePreClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=01d3af45436b43cc8c2c6f6f602c316d&page=${this.state.page}&pageSize=${this.props.pageSize}`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: this.state.articles.concat(json.articles),
          totalResults: json.totalResults,
          loading: true,
        });
      });
  };

  render() {
    return (
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {this.props.heading}
            </h1>
          </div>
        </header>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-4">
            {this.state.articles.map((element) => (
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
        {/* <div>
          <div class="flex mt-25">
            <button
              disabled={this.state.page <= 1}
              class="bg-dark-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l m-auto"
              onClick={this.handlePreClick}
            >
              &larr; &nbsp; Prev
            </button>
            <button
              class="bg-dark-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r m-auto"
              onClick={this.handleNextClick}
            >
              Next &nbsp; &rarr;
            </button>
          </div>
        </div> */}
      </>
    );
  }
}

export default News;
