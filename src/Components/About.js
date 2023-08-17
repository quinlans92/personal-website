import React, { useState } from 'react';

import ps from '../images/photoshop.png';
import ai from '../images/illustrator.png';
import ae from '../images/afterEffects.png';
import css from '../images/css.png';
import dw from '../images/dreamweaver.png';
import lr from '../images/lightroom.png';
import html from '../images/html.png';
import js from '../images/javascript.png';
import figma from '../images/figma.png';
import react from '../images/react.png';
import vs from '../images/vsCode.png';
import p5 from '../images/p5.png';
import flower from '../images/flower.png';
import camera from '../images/camera.png';
import headphones from '../images/headphones.png';
import pencil from '../images/pencil.png';
import icecream from '../images/icecream.png';
import coffee from '../images/coffee.png';
import paw from '../images/paw.png';
import weight from '../images/weight.png';
import PopUp from './PopUp'; // Import the PopUp component

const About = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupImage, setPopupImage] = useState('');
    const [popupHeading, setPopupHeading] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };


    const handleDownload = () => {

        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://drive.google.com/file/d/1dcEOCp0POzEMkX4v_1vYaxrA8-GnVTei/view?usp=sharing'; // Replace with the actual path to your CV file
        downloadLink.download = 'cv.pdf'; // Replace with the desired filename for the downloaded file
        downloadLink.click();
    };

    const handleImageOneHover = () => {
        setShowMenu(true);
        setPopupMessage('This is Image 1 popup message.');
        setPopupImage(ai);
        setPopupHeading('Image 1 Heading');
    };

    const handleImageOneLeave = () => {
        setShowMenu(false);
        setPopupMessage('');
        setPopupImage('');
        setPopupHeading('');
    };

    const handleImageTwoHover = () => {
        setShowMenu(true);
        setPopupMessage('This is Image 2 popup message.');
        setPopupImage(ps);
        setPopupHeading('Image 2 Heading');
    };

    const handleImageTwoLeave = () => {
        setShowMenu(false);
        setPopupMessage('');
        setPopupImage('');
        setPopupHeading('');
    };

    return (
        <div className="container abt-container">
            <div className="row">
                {/* Left side - Text */}
                <div className="col-sm-6">
                    <h1 className="myS" style={{ fontSize: '60px' }}>My Story</h1>
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Hey there! Let me share a little bit about my journey. I've always had this deep love for creativity and art—it's what truly drives me. I made the decision to head back to college as a mature student because I knew I had to follow my passion and pursue a career in the creative space.
                        Throughout my college journey, I've discovered a profound fascination with technology. Curiosity has been my constant companion.
                        As I near the end of college, I'm excitedly building my personal website, ready to showcase my skills and passion to potential employers. I can't wait to see what opportunities await me after I graduate in May 2024. My creative journey is just beginning.
                    </p>
                    <br />
                    <div>
                        <img
                            className="hobbie-image"
                            src={pencil}
                            alt="Image 2"
                        />
                        <img
                            className="hobbie-image"
                            style={{ marginLeft: '15px' }}
                            src={camera}
                            alt="Image 2"
                        />
                        <img
                            className="hobbie-image"
                            style={{ marginLeft: '15px' }}
                            src={headphones}
                            alt="Image 2"
                        />
                        <img
                            className="hobbie-image"
                            style={{ marginLeft: '15px' }}
                            src={weight}
                            alt="Image 2"
                        />
                        <img
                            className="hobbie-image"
                            style={{ marginLeft: '15px' }}
                            src={paw}
                            alt="Image 2"
                        />
                        <img
                            className="hobbie-image"
                            style={{ marginLeft: '15px' }}
                            src={flower}
                            alt="Image 2"
                        />
                        <img
                            className="hobbie-image"
                            style={{ marginLeft: '15px' }}
                            src={icecream}
                            alt="Image 2"
                        />
                        <img
                            className="hobbie-image"
                            style={{ marginLeft: '10px' }}
                            src={coffee}
                            alt="Image 2"
                        />
                    </div>
                </div>
                <div className='col-sm-6 skills-container'>
                    <div className='heading' style={{ textAlign: 'center' }}>
                        <h2 className='headingsAbout' style={{ fontWeight: 'bold' }}>Skills and Software</h2>
                    </div>
                    <img
                        className="skill-image"
                        src={html}
                        alt="Image 1"
                        onMouseEnter={handleImageOneHover}
                        onMouseLeave={handleImageOneLeave}
                    />
                    <img
                        className="skill-image"
                        src={css}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={js}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={p5}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={react}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={dw}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={vs}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={ps}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={ai}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={ae}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={lr}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <img
                        className="skill-image"
                        src={figma}
                        alt="Image 2"
                        onMouseEnter={handleImageTwoHover}
                        onMouseLeave={handleImageTwoLeave}
                    />
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button
                            className="btn btn-primary btn-lg"
                            style={{
                                backgroundColor: '#fff',
                                border: 'none',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.2s ease',
                                // Add other styles as needed
                            }}
                            onClick={handleDownload}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span style={{ color: '#A65151' }}>Download CV</span>
                        </button>
                    </div>
                    {showMenu && <PopUp message={popupMessage}
                        imageSrc={popupImage}
                        heading={popupHeading} />}
                </div>
            </div>
        </div >
    );
};

export default About;








