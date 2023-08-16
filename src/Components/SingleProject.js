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
        <div className="container-fluid" style={{ paddingTop: '100px' }}>
            <div className="row">
                <div className='col-md-12 d-flex' style={{ color: '#000', fontSize: '26px', fontWeight: 'bold', padding: '10px' }}>
                    {projectToDisplay.Project}
                </div>
                <br />
                <br />
                <div className="col-md-6">
                    <div className="d-flex flex-column align-items-center align-md-start">
                        <video
                            controls
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                backgroundColor: '#fff',
                                padding: '5px',
                                border: '5px solid #A65151',
                                borderRadius: '5px',
                            }}
                        >
                            <source src={projectToDisplay.video} type="video/mp4" />

                        </video>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column align-items-center align-md-start">
                        <p style={{ color: '#000', borderBottom: 'solid green 3px' }}>Features:</p>
                        {projectToDisplay.features.map((feature, index) => (
                            <p key={index} style={{ color: '#fff', fontSize: '24px' }}>{feature}</p>
                        ))}
                    </div>
                </div>
            </div>
            <br />
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

