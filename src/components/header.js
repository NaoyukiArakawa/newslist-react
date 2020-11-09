import React from 'react';

// when return new Date -> Error: Objects are not valid as a React child. If you meant to render a collection of children, use an array instead
const getDate = () => {
    const newsDate = new Date();
    return newsDate.getFullYear() + "-" +  (newsDate.getMonth()+1) + "-" + newsDate.getDate();
}

const Header = () => {
    return(
        <div>
        <h1>
        Hello, this is my first React app
        </h1>
        <p> The today is {getDate()}</p>    
        
        </div>
    )
}

export default Header;