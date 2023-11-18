import React, { Component } from 'react'
import pab from '../img/gg.jpg'


class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={pab} alt="profile" className="profilepic"/>                {/* <img src={profilepic} /> */}
                <h3>Hi, I'm Noppakrit</h3>
                <p>My name is Noppakrit Itsariyaraungkul I’m 21 years oldI am 4th year student in Computer Electronic Engineeringat King Mongkut’s University of Technology North Bangkok have a desire to do cooperative internships and and apply the knowledge learned to practice and working with company</p>
            </div>
        );
    }
}

export default About;
