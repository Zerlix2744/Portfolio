import React, { Component } from 'react';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect';
import pab from '../img/gg.jpg'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={pab} alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Noppakrit']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;