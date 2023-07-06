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
        <div className="container">
            <div className="row">
                <div className="col-sm-6" style={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
                    <div style={{ width: '22%', marginLeft: '22%' }}>
                        <img className='samImg'
                            src={samQuinlanImage}
                            alt="Sam Quinlan"
                        // style={{ width: '350px', height: '350px', objectFit: 'cover' }}
                        />
                    </div>
                    {/* to move the position of hello world */}
                    <div className='hw' style={{
                        position: 'absolute',
                        right: '57%',
                        fontSize: '48px',
                        fontWeight: 'bolder',
                    }}>Hello<br /> World
                    </div>
                </div>
                <div className="col-sm-6" style={{ display: 'flex', height: '100vh', alignItems: 'center', textAlign: 'left' }}>
                    <p style={{ color: '#fff', fontSize: '20px' }}>
                        <h2 style={{ color: '#fff' }}>I'm <span style={{ color: '#6929F2', fontWeight: 'bold' }}>Samantha</span></h2><br />
                        Welcome to my personal website! I'm a talented designer passionate about pursuing a career in UX. I thoroughly enjoy the programming and design elements, blending creativity with technology to craft seamless user experiences. Explore my portfolio and join me in shaping the future of user centric design and technology.
                        <br /><br />
                        <button style={{ color: '#0B0A1F', backgroundColor: '#F1B807', fontWeight: 'bold', border: 'none' }} onClick={handleDownload} className='btn btn-primary btn-lg' >Download CV</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage
