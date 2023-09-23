import React from 'react';
import samQuinlanImage from '../images/sam_quinlan.png';

const LandingPage = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#c8f7f8' }}>
            <div className="row align-items-center equal-height-cols">
                <div className="col-md-6 text-center">
                    <img className='samImg mx-auto' src={samQuinlanImage} alt='Sam Quinlan' style={{ maxWidth: '100%' }} />
                </div>
                <div className="col-md-6 text-center">
                    <p className='designer' style={{ fontSize: '35px', color: '#025959', fontWeight: '600' }}>
                        Hey, I'm <span style={{ color: '#f28705' }}>Samantha</span>,<br />
                        Welcome to my website.
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center"> {/* Center the content within the column */}
                            <h1 className="ui" style={{ fontSize: '100px', color: '#025959', marginTop: '10px' }}>
                                UI <span style={{ color: '#f28705' }}>UX</span>
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;



