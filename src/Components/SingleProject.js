import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the GitHub icon
import backGround from '../images/background.jpg'




const SingleProject = ({ projects }) => {
    const urlParameters = useParams();

    const [showBrainstorming, setShowBrainstorming] = useState(true); // Initial state


    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleHighlightEnter = () => {
        setIsHighlighted(true);
    };

    const handleHighlightLeave = () => {
        setIsHighlighted(false);
    };
    const textColor = isHovered ? '#fff' : '#000';

    const [isHighlighted, setIsHighlighted] = useState(false); // Initialize isHighlighted state



    let projectToDisplay;
    projectToDisplay = projects.find((item) => (
        item.id === Number(urlParameters.projectID)
    ));

    console.log("projectToDisplay:", projectToDisplay);

    return (
        <div className="container-fluid" style={{ paddingTop: '100px', backgroundColor: '#A65151' }}>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 style={{ color: '#fff' }}>{projectToDisplay.Project}</h1>
                    <br /><br /><br />
                    <Link to={`/projects/${projectToDisplay.id}`}>
                        <img
                            src={projectToDisplay.deviceImg}
                            alt="Image"
                            className="img-fluid"
                        />
                    </Link>
                </div>
                <div className="col-md-12 text-center mt-4 whiteBg">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <h3 style={{ fontWeight: 'bold', color: '#A65151', marginTop: '30px', marginBottom: '30px' }}>Objective</h3>
                        {projectToDisplay.objective.map((objective, index) => (
                            <p key={index} className='objectiveText' style={{ fontSize: '20px', color: '#000', paddingLeft: '30px', paddingRight: '30px', marginBottom: '30px' }}>{objective}</p>
                        ))}
                    </div>
                </div>
                <div className="col-md-12 text-center mt-4">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>
                            {projectToDisplay.projectType === 'Brainstorming' ? 'Brainstorming' : 'User Flow Diagram'}
                        </h3>
                        <Link to={`/projects/${projectToDisplay.id}`}>
                            {projectToDisplay.projectType === 'Brainstorming' ? (
                                <img
                                    src={projectToDisplay.brainstorming}
                                    alt="Brainstorming"
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', border: '3px solid white', borderRadius: '9px', marginBottom: '30px' }}
                                />
                            ) : (
                                <img
                                    src={projectToDisplay.userFlowChart}
                                    alt="User Flow Diagram"
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', border: '3px solid white', borderRadius: '9px', marginBottom: '30px' }}
                                />
                            )}
                        </Link>
                    </div>
                </div>
                {projectToDisplay.hasCreativeBrief && (
                    <div className="col-md-12 text-center mt-4 whiteBg">
                        <div className='col-md-8 offset-md-2 text-center'>
                            <h3 style={{ fontWeight: 'bold', color: '#A65151', marginTop: '30px', marginBottom: '30px' }}>Our Team's Creative Brief</h3>
                            {projectToDisplay.creativeBrief.map((imagePath, index) => (
                                <img
                                    key={index}
                                    className="img-fluid"
                                    style={{ marginBottom: '10px', width: '100%', height: 'auto', border: '3px solid #A65151', borderRadius: '9px' }}
                                    src={imagePath}
                                    alt={`Our Team's Creative Brief ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {projectToDisplay.hasProjectMap && (
                    <div className="col-md-12 text-center mt-4 ">
                        <div className='col-md-8 offset-md-2 text-center'>
                            <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Our Team's Project Map</h3>
                            <Link to={`/projects/${projectToDisplay.id}`}>
                                <img
                                    src={projectToDisplay.projectMap}
                                    alt="Brainstorming"
                                    style={{ width: '80%', height: 'auto', border: '3px solid #A65151', borderRadius: '9px', marginBottom: '30px' }}
                                />
                            </Link>
                        </div>
                    </div>
                )}

                <div className='d-flex justify-content-center whiteBg' >
                    <div className='col-md-8' style={{ marginBottom: '30px' }}>
                        <div className='text-center'>
                            <h3 style={{ fontWeight: 'bold', color: '#A65151', marginTop: '30px', marginBottom: '30px' }}>Problems To Solve</h3>
                        </div>
                        {projectToDisplay.ProblemsToSolve.map((ProblemsToSolve, index) => (
                            <div key={index} className="bg-A65151 p-3 rounded mb-3 pinkCont">
                                <p className="text-white" style={{ fontWeight: 'bold' }}>{ProblemsToSolve}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-12 text-center mt-4">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Early Sketch/MockUp</h3>
                        {projectToDisplay.sketch.map((imagePath, index) => (
                            <img key={index}
                                className="img-fluid"
                                style={{ marginBottom: '10px', width: '100%', height: 'auto', border: '3px solid white', borderRadius: '9px' }}
                                src={imagePath}
                                alt={`Early Sketch/MockUp ${index + 1}`} />
                        ))}
                    </div>
                </div>
                {/* <div className="col-md-12 text-center mt-4 whiteBg">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <h3 style={{ fontWeight: 'bold', color: '#A65151', marginTop: '30px', marginBottom: '30px' }}>Mockup</h3>
                        <Link to={`/projects/${projectToDisplay.id}`}>
                            <img
                                src={projectToDisplay.bwMockUp}
                                alt="Brainstorming"
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto', marginBottom: '30px', border: '3px solid #000', borderRadius: '9px' }}
                            />
                        </Link>
                    </div>
                </div> */}
                <div className="col-md-12 text-center mt-4 whiteBg">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <h3 style={{ fontWeight: 'bold', color: '#A65151', marginTop: '30px', marginBottom: '30px' }}>Color Palettes Considered</h3>
                        <Link to={`/projects/${projectToDisplay.id}`}>
                            <img
                                src={projectToDisplay.colorPallete}
                                alt="Brainstorming"
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto', border: '3px solid white', borderRadius: '9px' }}
                            />
                        </Link>
                        {projectToDisplay.colorPalleteDes.map((colorPalleteDes, index) => (
                            <p key={index} style={{ fontSize: '20px', color: '#A65151', paddingLeft: '30px', paddingRight: '30px', marginBottom: '30px', marginTop: '30px' }}>{colorPalleteDes}</p>
                        ))}
                    </div>
                </div>
                <div className="col-md-12 text-center mt-4">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>
                            {projectToDisplay.titleDesign === 'Fonts' ? 'Fonts' : 'Logo'}
                        </h3>
                        <Link to={`/projects/${projectToDisplay.id}`}>
                            {projectToDisplay.titleDesign === 'Fonts' ? (
                                <img
                                    src={projectToDisplay.font}
                                    alt="Brainstorming"
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', border: '2px solid #000', borderRadius: '9px' }}
                                />
                            ) : (
                                <div>
                                    {projectToDisplay.Logo.map((logo, index) => (
                                        <div key={index}>
                                            <img
                                                src={logo}
                                                alt={`Logo ${index + 1}`}
                                                className="img-fluid"
                                                style={{ backgroundColor: '#3C4040', width: '80%', height: 'auto', border: '2px solid #000', borderRadius: '9px', marginBottom: '10px' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Link>
                        {projectToDisplay.fontDesc.map((fontDesc, index) => (
                            <p key={index} style={{ fontSize: '20px', color: '#fff', paddingLeft: '30px', paddingRight: '30px', marginBottom: '30px', marginTop: '30px', }}>{fontDesc}</p>
                        ))}
                    </div>
                </div>
                <div className="col-md-12 text-center mt-4 whiteBg">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <h3 style={{ fontWeight: 'bold', color: '#A65151', marginTop: '30px', marginBottom: '30px' }}>Final Mockup</h3>
                        {projectToDisplay.finalMocup.map((imagePath, index) => (
                            <img key={index}
                                className="img-fluid"
                                style={{ marginBottom: '10px', width: '100%', height: 'auto', border: '3px solid #A65151', borderRadius: '9px' }}
                                src={imagePath}
                                alt={`Mockup ${index + 1}`} />
                        ))}
                        {projectToDisplay.finalMockUpDesc.map((finalMockUpDesc, index) => (
                            <p key={index} style={{ fontSize: '20px', color: '#A65151', paddingLeft: '30px', paddingRight: '30px', marginBottom: '30px', marginTop: '30px', }}>{finalMockUpDesc}</p>
                        ))}
                    </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center ">
                    <div className="col-md-8">
                        <div className="text-center">
                            <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Features</h3>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{ marginBottom: '30px' }}>
                            {projectToDisplay.features.map((feature, index) => (
                                <div key={index} className="bg-A65151 p-3 rounded mb-3" style={{ backgroundColor: '#fff', width: '200px' }}>
                                    <p style={{ color: '#A65151', fontWeight: 'bold', marginBottom: '0px' }}>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center whiteBg" >
                    <div className="col-md-8">
                        <div className="text-center">
                            <h3 style={{ fontWeight: 'bold', color: '#A65151', marginTop: '30px', marginBottom: '30px' }}>Software</h3>
                            <div className="d-flex flex-wrap justify-content-center">
                                {projectToDisplay.Software.map((Software, index) => (
                                    <Link key={index} to={`/projects/${projectToDisplay.id}`} style={{ margin: '10px' }}>
                                        <img
                                            src={Software}
                                            alt={`sketch-${index}`}
                                            className="img-fluid"
                                            style={{ width: 'auto', height: '100px', marginBottom: '30px' }}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 d-flex justify-content-center'>
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Demo</h3>
                </div>
                <div className='col-md-12 d-flex justify-content-center' style={{ backgroundColor: '#A65151' }}>
                    <video
                        controls
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            border: '3px solid black',
                            borderRadius: '5px',
                        }}
                    >
                        <source src={projectToDisplay.video} type="video/mp4" />
                    </video>
                </div>
                <div className='col-md-12 d-flex justify-content-center whiteBg' style={{ backgroundColor: '#A65151', paddingBottom: '30px' }}>
                    {projectToDisplay.isCodeProject && (
                        <div className='codeIcons'>
                            <h3>
                                <a
                                    href={projectToDisplay.gitHubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        color: textColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        transition: 'color 0.3s',
                                    }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        style={{
                                            color: textColor,
                                            width: '40px',
                                            height: '40px',
                                            marginRight: '10px',
                                            marginTop: '10px',
                                            transition: 'color 0.3s',
                                        }}
                                    />
                                    <span
                                        style={{
                                            borderBottom: `2px solid ${textColor}`,
                                            transition: 'border-color 0.3s',
                                        }}
                                    >
                                        Check out the code on Github
                                    </span>
                                </a>
                            </h3>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-md-12">
                <div className="col-md-12" style={{ textAlign: 'right' }}>
                    {projectToDisplay.dt.map((dt, index) => (
                        <p key={index} className="fC" style={{ fontSize: '30px', color: '#fff', paddingTop: '30px', marginRight: '30px' }}>Project Date: {dt}</p>
                    ))}
                </div>
                <div className="col-md-12" style={{ textAlign: 'right' }}>
                    <Link to={`/Projects`} className="align-self-start" style={{
                        marginTop: '10px',
                        backgroundColor: isHighlighted ? '#fff' : '#A65151', // Separate background color condition
                        borderRadius: '30px',
                        color: isHighlighted ? '#A65151' : '#fff', // Separate text color condition
                        display: 'inline-block',
                        border: '1px solid white',
                        padding: '10px 20px',
                        textDecoration: 'none',
                        marginBottom: '100px',
                        marginRight: '30px',
                        transform: isHighlighted ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.2s ease-in-out',
                    }}
                        onMouseEnter={handleHighlightEnter} // Add onMouseEnter handler
                        onMouseLeave={handleHighlightLeave} // Add onMouseLeave handler
                    >
                        See More Projects
                    </Link>
                </div>
            </div>
        </div>
    );


};

export default SingleProject;

