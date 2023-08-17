import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
    const [highlightedRecipe, setHighlightedRecipe] = useState(null);


    return (
        <div className="container-fluid" style={{ paddingTop: '100px' }}>
            <div className="row justify-content-center">
                {projects.map((item) => (
                    <div className="col-md-3 col-sm-6 col-xs-12" key={item.id}
                        onMouseEnter={() => setHighlightedRecipe(item.id)}
                        onMouseLeave={() => setHighlightedRecipe(null)}
                        style={{
                            borderRadius: '9px',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            margin: '10px',
                            fontWeight: 'bold',


                        }}
                    >
                        <div className="card mb-3" style={{
                            border: '5px solid #000', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                        }}>
                            <Link to={`/projects/${item.id}`}>
                                <img src={item.image} alt="RecipieImage" className="card-img-top" style={{
                                    height: '300px',
                                    objectFit: 'cover',

                                }} />
                            </Link>
                            <div className="card-body">
                                <h3 className="card-title" style={{ color: '#fff' }}>{item.Project}</h3>
                                <Link style={{
                                    backgroundColor: '#A65151',
                                    border: 'none',
                                    color: '#fff',
                                    transform: highlightedRecipe === item.id ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'transform 0.2s ease-in-out',
                                }} to={`/projects/${item.id}`} className="btn btn-primary btn-lg" >View Project</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Projects


