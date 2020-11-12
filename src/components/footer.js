import React, {Component} from 'react'

class Footer extends Component {
    render () {
        return(
            <footer>
                <div className='socialmedia_icon'>
                    <p>Github icon</p>
                    <p>Linkedin icon</p>
                    <p> {this.props.footerText}</p>
                </div>
            </footer>
        )
    }
}

export default Footer