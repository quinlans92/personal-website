// import React from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import 'react-horizontal-scrolling-menu/dist/styles.css';

// const getItems = () =>
//     Array(20)
//         .fill(0)
//         .map((_, ind) => ({ id: `element-${ind}` }));

// function About() {
//     const [items, setItems] = React.useState(getItems);
//     const [selected, setSelected] = React.useState([]);
//     const [position, setPosition] = React.useState(0);

//     const isItemSelected = (id) => !!selected.find((el) => el === id);

//     const handleClick = (id) => ({ getItemById, scrollToItem }) => {
//         const itemSelected = isItemSelected(id);

//         setSelected((currentSelected) =>
//             itemSelected
//                 ? currentSelected.filter((el) => el !== id)
//                 : currentSelected.concat(id)
//         );
//     };

//     return (
//         <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//             {items.map(({ id }) => (
//                 <Card
//                     itemId={id} // NOTE: itemId is required for track items
//                     title={id}
//                     key={id}
//                     onClick={handleClick(id)}
//                     selected={isItemSelected(id)}
//                 />
//             ))}
//         </ScrollMenu>
//     );
// }

// function LeftArrow() {
//     const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

//     return (
//         <div>
//             <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//                 Left
//             </button>
//         </div>
//     );
// }

// function RightArrow() {
//     const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

//     return (
//         <div>
//             <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
//                 Right
//             </button>
//         </div>
//     );
// }

// function Card({ onClick, selected, title, itemId }) {
//     const visibility = React.useContext(VisibilityContext);

//     return (
//         <div
//             onClick={() => onClick(visibility)}
//             style={{
//                 width: '160px',
//             }}
//             tabIndex={0}
//         >
//             <div className="card">
//                 <div>{title}</div>
//                 <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
//                 <div>selected: {JSON.stringify(!!selected)}</div>
//             </div>
//             <div
//                 style={{
//                     height: '200px',
//                 }}
//             />
//         </div>
//     );
// }

// export default About;
// import React, { useState } from 'react';
// import imageone from '../images/image1.png';
// import imagetwo from '../images/image2.png';
// import imagethree from '../images/image3.png';
// import imagefour from '../images/image4.png';
// import imagefive from '../images/image5.png';
// import imagesix from '../images/image6.png';
// import imageseven from '../images/image7.png';
// import imageeight from '../images/image8.png';
// import recV from '../voiceRec/rec.mp3';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight, faBookOpen, faHeadphones } from '@fortawesome/free-solid-svg-icons';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import viewImg from '../images/view.png';





// const images = [
//     { id: 1, src: imageone },
//     { id: 2, src: imagetwo },
//     { id: 3, src: imagethree },
//     { id: 4, src: imagefour },
//     { id: 5, src: imagefive },
//     { id: 6, src: imagesix },
//     { id: 7, src: imageseven },
//     { id: 8, src: imageeight },
// ];

// const About = () => {


//     const handleDownload = () => {

//         const downloadLink = document.createElement('a');
//         downloadLink.href = 'https://drive.google.com/file/d/1dcEOCp0POzEMkX4v_1vYaxrA8-GnVTei/view?usp=sharing'; // Replace with the actual path to your CV file
//         downloadLink.download = 'cv.pdf'; // Replace with the desired filename for the downloaded file
//         downloadLink.click();
//     };

//     const [isExpanded, setIsExpanded] = useState(false);
//     const [isVolExpanded, setVolIsExpanded] = useState(false);



//     const toggleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const toggleVolExpand = () => {
//         setVolIsExpanded(!isVolExpanded);
//     };



//     const [startIndex, setStartIndex] = useState(0);

//     const visibleImages = [
//         ...images.slice(startIndex, startIndex + 5),
//         ...images.slice(0, Math.max(0, 5 - (images.length - startIndex))),
//     ];

//     const handlePrevSet = () => {
//         setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     const handleNextSet = () => {
//         setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     return (
//         <>
//             <div className='container-fluid'>
//                 <div className='row align-items-center'>
//                     <div className="col-4-myS" style={{ width: '26%' }}>
//                         <h2 style={{
//                             fontFamily: 'Courier-Oblique',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             alignItems: 'center',
//                             fontStyle: 'italic',
//                             color: '#0B0A1F',
//                         }}>
//                             My Story
//                             <FontAwesomeIcon
//                                 icon={isExpanded ? faBookOpen : faBookOpen}
//                                 style={{ marginLeft: '20px', color: '#0B0A1F' }} onClick={toggleExpand}
//                             />
//                             <FontAwesomeIcon
//                                 icon={isExpanded ? faHeadphones : faHeadphones}
//                                 style={{ marginLeft: '20px', color: '#0B0A1F' }} onClick={toggleVolExpand}
//                             />

//                         </h2>
//                         {isExpanded && (
//                             <p style={{ fontFamily: 'Courier-Oblique', marginLeft: '25px', marginRight: '5px' }}>
//                                 Hey there! Let me share a little bit about my journey. I've always had this deep love for creativity and art—it's what truly drives me. I made the decision to head back to college as a mature student because I knew I had to follow my passion and pursue a career in the creative space.
//                                 Throughout my college journey, I've discovered a profound fascination with technology. Curiosity has been my constant companion.
//                                 As I near the end of college, I'm excitedly building my personal website, ready to showcase my skills and passion to potential employers. I can't wait to see what opportunities await me after I graduate in May 2024. My creative journey is just beginning.
//                             </p>
//                         )}
//                         {isVolExpanded && (
//                             <audio controls>
//                                 <source src={recV} type="audio/mpeg" />

//                             </audio>
//                         )}
//                     </div>

//                     <div className="col-8" style={{
//                         position: 'absolute',
//                         top: '10%',
//                         left: '26%',
//                         width: '74%',
//                         height: '50%',
//                         wordBreak: 'break-all',
//                         whiteSpace: 'normal',
//                         backgroundImage: `url(${viewImg})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat',
//                     }}>
//                     </div>
//                 </div>
//                 <div className='col-12'>
//                     <div className='row'>
//                         <div>
//                             <h3 className='SS' style={{ color: '#fff', paddingTop: '10px' }}>Skills and Software</h3>
//                             <div className="image-container">
//                                 <div className="left-arrow">
//                                     <button style={{ backgroundColor: '#20A876', border: '1px solid white' }} className="btn btn-primary" onClick={handlePrevSet}>
//                                         <FontAwesomeIcon icon={faArrowLeft} />
//                                     </button>
//                                 </div>
//                                 {visibleImages.map((image) => (
//                                     <LazyLoadImage
//                                         style={{ marginLeft: '20px', paddingTop: '20px' }}
//                                         key={image.id}
//                                         src={image.src}
//                                         alt={`Image ${image.id}`}
//                                         effect="blur" // Optional blur effect while loading
//                                     />
//                                 ))}
//                                 <div className="right-arrow">
//                                     <button style={{ backgroundColor: '#20A876', border: '1px solid white' }} className="btn btn-primary" onClick={handleNextSet}>
//                                         <FontAwesomeIcon icon={faArrowRight} />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='col-12'>
//                     <div className='row'>
//                         <div>
//                             <h3 className='HI' style={{ color: '#fff', paddingTop: '10px' }}>Hobbies and Interests</h3><br />
//                             <div className="hiImage-container">
//                                 <div className="hiLeft-arrow">
//                                     <button style={{ backgroundColor: '#20A876', border: '1px solid white' }} className="btn btn-primary" onClick={handlePrevSet}>
//                                         <FontAwesomeIcon icon={faArrowLeft} />
//                                     </button>
//                                 </div>
//                                 {visibleImages.map((image) => (
//                                     <LazyLoadImage
//                                         style={{ marginLeft: '20px', paddingTop: '20px' }}
//                                         key={image.id}
//                                         src={image.src}
//                                         alt={`Image ${image.id}`}
//                                         effect="blur" // Optional blur effect while loading
//                                     />
//                                 ))}
//                                 <div className="hiRight-arrow">
//                                     <button style={{ backgroundColor: '#20A876', border: '1px solid white' }} className="btn btn-primary" onClick={handleNextSet}>
//                                         <FontAwesomeIcon icon={faArrowRight} />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div>                        <button style={{ color: '#0B0A1F', backgroundColor: '#F1B807', fontWeight: 'bold', border: 'none' }} onClick={handleDownload} className='btn btn-primary btn-lg' >Download CV</button>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </>
//     );

// };

// export default About;

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
        <div className="container" style={{ marginTop: '10%', marginLeft: '10px' }}>
            <div className="row">
                {/* Left side - Text */}
                <div className="col-sm-6" style={{ padding: '20px' }}>
                    <h1 className="myS" style={{ fontSize: '60px' }}>My Story</h1>
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Hey there! Let me share a little bit about my journey. I've always had this deep love for creativity and art—it's what truly drives me. I made the decision to head back to college as a mature student because I knew I had to follow my passion and pursue a career in the creative space.
                        Throughout my college journey, I've discovered a profound fascination with technology. Curiosity has been my constant companion.
                        As I near the end of college, I'm excitedly building my personal website, ready to showcase my skills and passion to potential employers. I can't wait to see what opportunities await me after I graduate in May 2024. My creative journey is just beginning.
                        <img
                            className="skill-image"
                            src={pencil}
                            alt="Image 2"
                            onMouseEnter={handleImageTwoHover}
                            onMouseLeave={handleImageTwoLeave}
                        />
                        <img
                            className="skill-image"
                            src={camera}
                            alt="Image 2"
                            onMouseEnter={handleImageTwoHover}
                            onMouseLeave={handleImageTwoLeave}
                        />
                        <img
                            className="skill-image"
                            src={headphones}
                            alt="Image 2"
                            onMouseEnter={handleImageTwoHover}
                            onMouseLeave={handleImageTwoLeave}
                        />
                        <img
                            className="skill-image"
                            src={weight}
                            alt="Image 2"
                            onMouseEnter={handleImageTwoHover}
                            onMouseLeave={handleImageTwoLeave}
                        />
                        <img
                            className="skill-image"
                            src={paw}
                            alt="Image 2"
                            onMouseEnter={handleImageTwoHover}
                            onMouseLeave={handleImageTwoLeave}
                        />
                        <img
                            className="skill-image"
                            src={flower}
                            alt="Image 2"
                            onMouseEnter={handleImageTwoHover}
                            onMouseLeave={handleImageTwoLeave}
                        />
                        <img
                            className="skill-image"
                            src={icecream}
                            alt="Image 2"
                            onMouseEnter={handleImageTwoHover}
                            onMouseLeave={handleImageTwoLeave}
                        />
                        <img
                            className="skill-image"
                            src={coffee}
                            alt="Image 2"
                            onMouseEnter={handleImageTwoHover}
                            onMouseLeave={handleImageTwoLeave}
                        />
                    </p>
                </div>
                <div className='col-sm-6 skills-container'>
                    <h2 className='headingsAbout' style={{ color: '#fff' }}>Skills and Software</h2>
                    {/* Step 2: Add event handlers to the images */}
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
                    {showMenu && <PopUp message={popupMessage}
                        imageSrc={popupImage}
                        heading={popupHeading} />}

                </div>
            </div>
        </div >
    );
};

export default About;








