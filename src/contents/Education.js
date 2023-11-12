import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Engineering Technology" where="King Mongkut’s University of Technology North Bangkok " from="2020" to="Present" gpx="GPAX 2.92" />
                <Widecard title="Electrical and Electronics" where="Thai-German Pre-Engineering School" from="2017" to="2020" />
            </div>
        );
    }
}

export default Education;