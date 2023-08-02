import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';


const SingleProject = ({ projects }) => {
    const urlParameters = useParams();


    let projectToDisplay;
    projectToDisplay = projects.find((item) => (
        item.id === Number(urlParameters.projectID)
    ));

    return (
        <div className="project-container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="image-container">
                        <img
                            style={{
                                backgroundColor: '#fff',
                                padding: '5px',
                                border: '2px solid green',
                                borderRadius: '5px',
                            }}
                            src={projectToDisplay.image}
                            alt="project"
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="text-container" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                        <div className="text">
                            <p style={{ textTransform: 'uppercase', color: '#fff' }}>
                                {projectToDisplay.Project} <FontAwesomeIcon style={{ color: '#FF69B4' }} icon={faHeart} />
                            </p>
                            <br />
                            <br />
                            <p style={{ color: '#fff', borderBottom: 'solid green 3px' }}>Description:</p>
                            <p style={{ color: '#fff' }}>{projectToDisplay.desc}</p>
                            {/* Add other project details you want to display */}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Link to={`/Projects`}>
                <FontAwesomeIcon
                    style={{
                        padding: '10px',
                        backgroundColor: 'transparent',
                        fontSize: '1.5rem',
                        color: 'white',
                        cursor: 'pointer',
                        outline: 'none',
                        borderRadius: '5px',
                        border: '1px solid white',
                        float: 'left',
                    }}
                    icon={faArrowLeft}
                />
            </Link>
        </div>
    );
};

export default SingleProject;

