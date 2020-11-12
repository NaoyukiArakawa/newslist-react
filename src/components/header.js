import React,{ Component } from 'react';

// when return new Date -> Error: Objects are not valid as a React child. If you meant to render a collection of children, use an array instead
// const getDate = () => {
//     const newsDate = new Date();
//     return newsDate.getFullYear() + "-" +  (newsDate.getMonth()+1) + "-" + newsDate.getDate();
// }

class Header extends Component {


    state = {
        active: false,
        title: "The keyword are: ",
        keywords: "",
    }

    inputChange(event){
        const value = event.target.value === '' ? false : true;
        this.setState({
            active: value,
            keywords: event.target.value
        })
    }

    render() {

        return(
            <header style={{ background: `${this.state.active ? 'red': 'blue'}`}}>
                <div
                    className="logo">
                    React App</div>
                <input
                    onChange={ this.props.keywords }
                ></input>
                <div> {this.state.title} </div>
                <div> {this.state.keywords} </div>

            </header>
        )
    }
}

export default Header;