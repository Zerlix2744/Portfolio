import React, { Component } from 'react'

import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : noppakrit.274@gmail.com</h3>
                <h3>Facebook : Jay Noppakrit</h3>
                <h3>Instagram : @jaynpk</h3>
                <h3>Line : @jaanejbk</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;
