import React from "react";
// import { Fade } from 'react-reveal';
import samQuinlanImage from '../images/sam_quinlan.png';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{ display: 'flex', height: '100vh', alignItems: 'center', float: 'right' }}>
                    <p style={{ color: '#fff', fontSize: '20px' }}>
                        <h2 style={{ color: '#fff' }}>About <span style={{ color: '#6929F2', fontWeight: 'bold' }}>Me</span></h2><br />
                        Welcome to my personal website! I'm a talented designer passionate about pursuing a career in UX. I thoroughly enjoy the programming and design elements, blending creativity with technology to craft seamless user experiences. Explore my portfolio and join me in shaping the future of user centric design and technology.
                        <br /><br />
                    </p>
                </div>
            </div>
        </div>

    );
};

export default About;