import React, {Component} from 'react';

class Lifecycles extends Component {
    constructor(props){
        super(props)

        this.state= {name: 'Steve'}
    }

    render() {
        return (
            <>
            Lifecycles
            </>
        )
    }
}

export default Lifecycles