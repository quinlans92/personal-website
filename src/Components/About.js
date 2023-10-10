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
import vs from '../images/visualStudio.png';
import p5 from '../images/p5.png';
import flower from '../images/flower.png';
import camera from '../images/camera.png';
import headphones from '../images/headphones.png';
import pencil from '../images/pencil.png';
import icecream from '../images/icecream.png';
import coffee from '../images/coffee.png';
import paw from '../images/paw.png';
import weight from '../images/weight.png';
import PopUp from './PopUp';
import view from '../images/view.png';

const About = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupImage, setPopupImage] = useState('');
    const [popupHeading, setPopupHeading] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    // const handleHover = () => {
    //     setIsHovered(!isHovered);
    // };


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
        <div className="container-fluid abt-container" style={{ backgroundColor: '#fff' }}>
            <div className="row">
                <div
                    className="col-sm-12 text-center full-width-image-container"
                    style={{
                        backgroundColor: '#025959',
                        backgroundImage: `url(${view})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                    }}
                >
                    <img src={view} alt="view" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="col-sm-12 text-center" >
                    <h1 className="myS" style={{ fontSize: '60px', color: '#025959' }}>My Story</h1>
                    <p style={{ color: '#025959', fontSize: '20px', fontWeight: 'bold', padding: '50px' }}>
                        Hey there! Let me share a little bit about my journey. I've always had this deep love for creativity and art—it's what truly drives me. I made the decision to head back to college as a mature student because I knew I had to follow my passion and pursue a career in the creative space.
                        Throughout my college journey, I've discovered a profound fascination with technology. Curiosity has been my constant companion.
                        As I near the end of college, I'm excitedly building my personal website, ready to showcase my skills and passion to potential employers. I can't wait to see what opportunities await me after I graduate in May 2024. My creative journey is just beginning.
                    </p>
                    <br />
                </div>
                <div className='col-sm-12 skills-container'>
                    <div className='heading' style={{ textAlign: 'center' }}>
                        <h2 className='headingsAbout' style={{ fontWeight: 'bold', color: '#025959', marginBottom: '50px' }}>Skills and Software</h2>
                    </div>
                    <div className='row' >
                        {/* <div className="col-md-12">
                            <img
                                className="skill-image"
                                src={html}
                                style={{ marginBottom: '30px' }}
                                alt="Image 1"
                                onMouseEnter={handleImageOneHover}
                                onMouseLeave={handleImageOneLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={css}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={js}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={p5}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={react}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={dw}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={vs}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={ps}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={ai}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={ae}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <img
                                className="skill-image"
                                src={lr}
                                style={{ marginBottom: '30px' }}
                                alt="Image 2"
                                onMouseEnter={handleImageTwoHover}
                                onMouseLeave={handleImageTwoLeave}
                            />
                        </div> */}
                        <div className="col-md-12">
                            <h1 style={{ color: '#F28705', fontSize: '40px', fontWeight: 'bold', paddingLeft: '50px' }}>Figma</h1>
                            <div>
                                <img
                                    className="skill-image"
                                    src={figma}
                                    style={{ marginBottom: '30px', paddingLeft: '50px' }}
                                    alt="Image 2"
                                    onMouseEnter={handleImageTwoHover}
                                    onMouseLeave={handleImageTwoLeave}
                                />
                                <p style={{ color: '#025959', fontSize: '20px', fontWeight: 'bold', paddingLeft: '50px' }}><span style={{ fontStyle: 'italic' }}>Projects Using Figma</span>:<br /> React Recipe App Mockup <br /> Travel website Mockup <br /> HTML 6 Page Static Website Mockup</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button
                            className="btn btn-primary btn-lg"
                            style={{
                                backgroundColor: '#025959',
                                border: isHovered ? '2px solid white' : '2px solid #025959',
                                borderRadius: '30px',
                                color: '#fff',
                                display: 'inline-block',
                                marginTop: '10px', // Add some margin to separate from the title
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                backgroundColor: isHovered ? '#025959' : '#fff',
                                color: isHovered ? '#fff' : '#025959',
                                transition: 'transform 0.2s ease-in-out',
                                padding: '10px 20px',
                                textDecoration: 'none',
                                // Add other styles as needed
                            }}
                            onClick={handleDownload}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Download CV
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








