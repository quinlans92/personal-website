import React from 'react';
import samQuinlanImage from '../images/sam_quinlan.png';

import '../App.css';



const LandingPage = () => {



    return (
        <div className="container-me">
            <div className='col-sm-12-p'>
                <p className='designer' style={{ fontSize: '35px' }}>Hey, I'm <span style={{ color: '#fff' }}>Samantha</span>,<br />Welcome to my website.</p>
            </div>
            <div className="col-sm-12-i">
                <img className='samImg' src={samQuinlanImage} alt="Sam Quinlan" />
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="opposite-center">
                        <h1 className="ui" style={{ color: '#A65151' }}>UI</h1>
                        <h1 className="ui" style={{ color: '#fff' }}>UX</h1>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default LandingPage;
