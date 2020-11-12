import React from 'react';

// eslint-disable-next-line 
import NewsListItem from './news_list_item';

const NewsList = (props) => {

    const news =  props.news.map( (item, i) => (
        <NewsListItem item={item} key={i}></NewsListItem>
    ))

    return(
        <div>
            <h2 className='news_header'>This is news list</h2>
            <div>
                { news }
            </div>
        </div>
    )
}

export default NewsList