import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';

const App = () => {
  return (
    <>
    <Header/>
    <NewsList/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))