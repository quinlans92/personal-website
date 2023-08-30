import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the GitHub icon
import backGround from '../images/background.jpg'




const SingleProject = ({ projects }) => {
    const urlParameters = useParams();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const textColor = isHovered ? '#fff' : '#000';



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

                <div className="col-md-12 text-center mt-4">
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Objective</h3>
                    {projectToDisplay.objective.map((objective, index) => (
                        <p key={index} style={{ fontSize: '20px', color: '#fff', paddingLeft: '30px', paddingRight: '30px', marginBottom: '30px' }}>{objective}</p>
                    ))}
                </div>

                <div className="col-md-12 text-center mt-4">
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Brainstorming</h3>
                    <Link to={`/projects/${projectToDisplay.id}`}>
                        <img
                            src={projectToDisplay.brainstorming}
                            alt="Brainstorming"
                            className="img-fluid"
                            style={{ width: '80%', height: 'auto' }}
                        />
                    </Link>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='col-md-8'>
                        <div className='text-center'>
                            <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Identified Challenges</h3>
                        </div>
                        {projectToDisplay.ProblemsToSolve.map((ProblemsToSolve, index) => (
                            <div key={index} className="bg-light p-3 rounded mb-3">
                                <p style={{ color: '#A65151', fontWeight: 'bold', marginBottom: '30px' }} className="mb-0">{ProblemsToSolve}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-md-12 text-center mt-4">
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Early Sketch</h3>
                    <div className="d-flex justify-content-center">
                        {projectToDisplay.sketch.map((sketchImage, index) => (
                            <Link key={index} to={`/projects/${projectToDisplay.id}`}>
                                <img
                                    src={sketchImage}
                                    alt={`sketch-${index}`}
                                    className="img-fluid"
                                    style={{ width: '90%', height: 'auto', margin: '10px', border: '10px solid white' }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="col-md-12 text-center mt-4">
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Mockup</h3>
                    <Link to={`/projects/${projectToDisplay.id}`}>
                        <img
                            src={projectToDisplay.bwMockUp}
                            alt="Brainstorming"
                            className="img-fluid"
                            style={{ width: '80%', height: 'auto' }}
                        />
                    </Link>
                </div>
                <div className="col-md-12 text-center mt-4">
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Color Palettes Considered</h3>
                    <Link to={`/projects/${projectToDisplay.id}`}>
                        <img
                            src={projectToDisplay.colorPallete}
                            alt="Brainstorming"
                            className="img-fluid"
                            style={{ width: '80%', height: 'auto' }}
                        />
                    </Link>
                    {projectToDisplay.colorPalleteDes.map((colorPalleteDes, index) => (
                        <p key={index} style={{ fontSize: '20px', color: '#fff', paddingLeft: '30px', paddingRight: '30px', marginBottom: '30px', marginTop: '30px' }}>{colorPalleteDes}</p>
                    ))}
                </div>
                <div className="col-md-12 text-center mt-4">
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Fonts Considered</h3>
                    <Link to={`/projects/${projectToDisplay.id}`}>
                        <img
                            src={projectToDisplay.font}
                            alt="Brainstorming"
                            className="img-fluid"
                            style={{ width: '80%', height: 'auto' }}
                        />
                    </Link>
                    {projectToDisplay.fontDesc.map((fontDesc, index) => (
                        <p key={index} style={{ fontSize: '20px', color: '#fff', paddingLeft: '30px', paddingRight: '30px', marginBottom: '30px', marginTop: '30px', }}>{fontDesc}</p>
                    ))}
                </div>
                <div className="col-md-12 text-center mt-4">
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Final Mockup</h3>
                    <Link to={`/projects/${projectToDisplay.id}`}>
                        <img
                            src={projectToDisplay.finalMocup}
                            alt="Brainstorming"
                            className="img-fluid"
                            style={{ width: '80%', height: 'auto' }}
                        />
                    </Link>
                    {projectToDisplay.finalMockUpDesc.map((finalMockUpDesc, index) => (
                        <p key={index} style={{ fontSize: '20px', color: '#fff', paddingLeft: '30px', paddingRight: '30px', marginBottom: '30px', marginTop: '30px', }}>{finalMockUpDesc}</p>
                    ))}
                </div>
                <div className='col-md-12 d-flex justify-content-center'>
                    <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Demo</h3>
                </div>
                <div className='col-md-12 d-flex justify-content-center'>
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
                <div className='col-md-12 d-flex justify-content-center'>
                    {projectToDisplay.isCodeProject && (
                        <div className='codeIcons'>
                            <h3>
                                <a
                                    href="https://github.com/quinlans92/kidsWeatherApp_bySamantha"
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
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="text-center">
                            <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Features</h3>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            {projectToDisplay.features.map((feature, index) => (
                                <p key={index} style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0px' }}>{feature}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="text-center">
                            <h3 style={{ fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '30px' }}>Software</h3>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            {projectToDisplay.Software.map((Software, index) => (
                                <p key={index} style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0px' }}>{Software}</p>

                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h3>Date of Project</h3><br />
                {projectToDisplay.dt.map((dt, index) => (
                    <p key={index} style={{ fontSize: '24px' }}>{dt}</p>
                ))}
                <Link to={`/Projects`} className="align-self-start">
                    <FontAwesomeIcon
                        style={{
                            padding: '10px',
                            backgroundColor: 'transparent',
                            fontSize: '1.5rem',
                            color: 'black',
                            cursor: 'pointer',
                            outline: 'none',
                            borderRadius: '5px',
                            border: '1px solid white',
                        }}
                        icon={faArrowLeft}
                    />
                </Link>
            </div>
        </div>



    );


};

export default SingleProject;

