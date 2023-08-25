import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
    const [highlightedRecipe, setHighlightedRecipe] = useState(null);

    return (
        <div className="container-fluid projects-container" >
            <div className="row">
                {projects.map((item) => (
                    <div
                        className="col-md-6 col-lg-6 mb-4" // Adjust column classes
                        key={item.id}
                        onMouseEnter={() => setHighlightedRecipe(item.id)}
                        onMouseLeave={() => setHighlightedRecipe(null)}
                    >
                        <div
                            className="card"
                            style={{
                                borderRadius: '9px',
                                border: 'none',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                width: '100%', // Adjust the card's width to fill the column
                            }}
                        >
                            <Link to={`/projects/${item.id}`}>
                                <img
                                    src={item.image}
                                    alt="Image"
                                    className="card-img-top"
                                    style={{
                                        height: '400px', // Adjust the height to your preference
                                        objectFit: 'cover', // This will make the image fit while maintaining its aspect ratio
                                        borderRadius: '9px 9px 0 0', // Apply rounded corners to the top
                                    }}
                                />
                            </Link>
                            <div className="card-body">
                                <h3 className="card-title" style={{ color: '#fff', float: 'left' }}>
                                    {item.Project}
                                </h3>
                                <br />
                                <br />
                                <p className="card-title" style={{ color: '#fff', float: 'left' }}>
                                    {item.category}
                                </p>
                                <div style={{ clear: 'both' }}></div>
                                <Link
                                    style={{
                                        backgroundColor: '#A65151',
                                        border: '2px solid white',
                                        borderRadius: '30px',
                                        color: '#fff',
                                        display: 'inline-block',
                                        marginTop: '10px', // Add some margin to separate from the title
                                        transform: highlightedRecipe === item.id ? 'scale(1.1)' : 'scale(1)',
                                        backgroundColor: highlightedRecipe === item.id ? '#fff' : '#A65151',
                                        color: highlightedRecipe === item.id ? '#A65151' : '#fff',
                                        transition: 'transform 0.2s ease-in-out',
                                        padding: '10px 20px',
                                        textDecoration: 'none',
                                    }}
                                    to={`/projects/${item.id}`}
                                >
                                    View Project
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Projects;




