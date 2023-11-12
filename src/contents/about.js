import React, { Component } from 'react'


class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/400575057_6826551037431173_331947830585744179_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwrynW0PXNfYlwAg324h3Mv4QdnyHR2my_hB2fIdHabJk_tfggt9InF7hL2CfCAPjr7vE_WYGhPKFmJDxkWHl3&_nc_ohc=TE10RHKuIjwAX8U5G2L&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfBWjwc2NnaWlV1t3LT6lhGuCDPsZ8cHyRfnh25oyV08tg&oe=65558617" alt="profile" className="profilepic"/>                {/* <img src={profilepic} /> */}
                <h3>Hi, I'm Noppakrit</h3>
                <p>My name is Noppakrit Itsariyaraungkul I’m 21 years oldI am 4th year student in Computer Electronic Engineeringat King Mongkut’s University of Technology North Bangkok have a desire to do cooperative internships and and apply the knowledge learned to practice and working with company</p>
            </div>
        );
    }
}

export default About;
