import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json'


import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';
import Lifecycles from './components/lifecycles';

class App extends Component {

  state = {
    news: JSON,
    filteredNews: [],
    footerText: "Copyright Created by Naoyuki"
  }

  getKeywords = (event) => {
    let keywords = event.target.value;
    let filterNews = this.state.news.filter( (item) => {
      return item.title.indexOf(keywords) > -1
    })

    this.setState({
      filteredNews: filterNews
    })
  }

  render() { 

    const state  = this.state;
    let filteredNews = state.filteredNews;
    let allNews = state.news;

    return (
      <div>
      <Header keywords={this.getKeywords}/>
      <NewsList news={filteredNews.length === 0 ? allNews : filteredNews}></NewsList>
      <Footer footerText={this.state.footerText}/>
      <Lifecycles/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))