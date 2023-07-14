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
import React, { useState } from 'react';
import imageone from '../images/image1.png';
import imagetwo from '../images/image2.png';
import imagethree from '../images/image3.png';
import imagefour from '../images/image4.png';
import imagefive from '../images/image5.png';
import imagesix from '../images/image6.png';
import imageseven from '../images/image7.png';
import imageeight from '../images/image8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const images = [
    { id: 1, src: imageone },
    { id: 2, src: imagetwo },
    { id: 3, src: imagethree },
    { id: 4, src: imagefour },
    { id: 5, src: imagefive },
    { id: 6, src: imagesix },
    { id: 7, src: imageseven },
    { id: 8, src: imageeight },
];

const About = () => {
    const [startIndex, setStartIndex] = useState(0);

    const visibleImages = [
        ...images.slice(startIndex, startIndex + 5),
        ...images.slice(0, Math.max(0, 5 - (images.length - startIndex))),
    ];

    const handlePrevSet = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextSet = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='container'>
            <div className='col-12'>
                <div className='row'>
                    <div className='myStory'>
                        <h2>My Story</h2>
                        <p>My name is Samantha, I went back to college as a mature student
                            and studied creative media and design, I never thought that I would
                            like the technical element but I thrived, and so here I am. Some of my Skills are below</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='SS' style={{ color: '#fff', borderTop: '1px solid white', padding: '10px' }}>Skills and Software</h2>
                <div style={{ borderBottom: '1px solid white' }} className="image-container">
                    <div className="left-arrow">
                        <button style={{ backgroundColor: '#20A876', border: '1px solid white' }} className="btn btn-primary" onClick={handlePrevSet}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </div>
                    {visibleImages.map((image) => (
                        <LazyLoadImage
                            style={{ marginLeft: '20px' }}
                            key={image.id}
                            src={image.src}
                            alt={`Image ${image.id}`}
                            effect="blur" // Optional blur effect while loading

                        />
                    ))}
                    <div className="right-arrow">
                        <button style={{ backgroundColor: '#20A876', border: '1px solid white' }} className="btn btn-primary" onClick={handleNextSet}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <div className='row'>
                    <div>
                        <h2 className='HI' style={{ color: '#fff', borderTop: '1px solid white', padding: '10px' }}>Hobbies and Interests</h2>
                        <div style={{ borderBottom: '1px solid white' }} className="hiImage-container">
                            <div className="hiLeft-arrow">
                                <button style={{ backgroundColor: '#20A876', border: '1px solid white' }} className="btn btn-primary" onClick={handleNextSet}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                            </div>
                            <div className="image-slider">
                                {visibleImages.map((image) => (
                                    <LazyLoadImage
                                        style={{ marginLeft: '20px' }}
                                        key={image.id}
                                        src={image.src}
                                        alt={`Image ${image.id}`}
                                        effect="blur" // Optional blur effect while loading
                                    />
                                ))}
                            </div>
                            <div className="hiRight-arrow">
                                <button style={{ backgroundColor: '#20A876', border: '1px solid white' }} className="btn btn-primary" onClick={handlePrevSet}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;




