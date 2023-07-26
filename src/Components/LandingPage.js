import React from 'react';
import samQuinlanImage from '../images/sam_quinlan.png';

import '../App.css';



const LandingPage = () => {

    const handleDownload = () => {

        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://drive.google.com/file/d/1dcEOCp0POzEMkX4v_1vYaxrA8-GnVTei/view?usp=sharing'; // Replace with the actual path to your CV file
        downloadLink.download = 'cv.pdf'; // Replace with the desired filename for the downloaded file
        downloadLink.click();
    };

    return (
        <div className="container-me">
            <div className='col-sm-12-p'>
                <p className='designer' style={{ fontSize: '35px', fontWeight: 'bold' }}>Hey, I'm <span style={{ color: '#fff' }}>Samantha</span>,<br />Welcome to my website.</p>
            </div>
            <div className="col-sm-12-i">
                <img className='samImg' src={samQuinlanImage} alt="Sam Quinlan" />
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="opposite-center">
                        <h1 style={{ color: '#A65151' }}>UI</h1>
                        <h1 style={{ color: '#fff' }}>UX</h1>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default LandingPage;
