import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the GitHub icon



const SingleProject = ({ projects }) => {
    const urlParameters = useParams();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const textColor = isHovered ? '#A65151' : '#000';



    let projectToDisplay;
    projectToDisplay = projects.find((item) => (
        item.id === Number(urlParameters.projectID)
    ));

    return (
        <div className="container-fluid" style={{ paddingTop: '100px' }}>
            <div className="row">
                <div className='col-md-12 d-flex flex-column align-items-center align-md-start bg' style={{ color: '#000', fontSize: '26px', fontWeight: 'bold', padding: '10px', textTransform: 'uppercase', }}>
                    {projectToDisplay.Project}
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column align-items-center align-md-start">
                        <p style={{ fontSize: '24px', fontWeight: 'bold', float: 'left', marginTop: '20px', marginBottom: '40px' }}>Demo</p>
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
                <div className="col-md-6">
                    <div className="d-flex flex-column align-items-center align-md-start">
                        <p style={{ color: '#000', fontSize: '24px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px', marginTop: '20px', marginBottom: '40px' }}>Features</p>
                        {projectToDisplay.features.map((features, index) => (
                            <p key={index} style={{ color: '#000', fontSize: '24px', }}>{features}</p>
                        ))}
                    </div>
                </div>
                <div className='col-md-12 d-flex flex-column align-items-center align-md-start bg' style={{ color: '#000', fontSize: '26px', fontWeight: 'bold', padding: '10px', textTransform: 'uppercase', marginTop: '40px' }}>
                    <span>Process</span>
                </div>
                <div className="d-flex flex-column align-items-center align-md-start">
                    <p style={{ color: '#000', fontSize: '24px', fontWeight: 'bold', paddingLeft: '40px', paddingRight: '40px', marginTop: '40px', marginBottom: '40px' }}>Features</p>
                    {projectToDisplay.Process.map((Process, index) => (
                        <p key={index} style={{ color: '#000', fontSize: '24px', }}>{Process}</p>
                    ))}
                </div>
            </div>
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
    );


};

export default SingleProject;

