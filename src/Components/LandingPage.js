import React from 'react';
import samQuinlanImage from '../images/sam_quinlan.png';

const LandingPage = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
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
                            <h1 className="ui" style={{ fontSize: '100px', marginTop: '10px' }}>
                                <span style={{ color: '#025959' }}>UI</span> <span style={{ color: '#f28705' }}>UX</span>
                            </h1>
                            <h2 style={{ color: '#025959' }}><span style={{ marginLeft: '2px' }}>D</span><span style={{ marginLeft: '2px' }}>I</span><span style={{ marginLeft: '2px' }}>G</span><span style={{ marginLeft: '2px' }}>I</span><span style={{ marginLeft: '2px' }}>T</span><span style={{ marginLeft: '2px' }}>A</span><span style={{ marginLeft: '2px' }}>L</span><span style={{ marginLeft: '14px' }}>D</span><span style={{ marginLeft: '2px' }}>E</span><span style={{ marginLeft: '2px' }}>S</span><span style={{ marginLeft: '2px' }}>I</span><span style={{ marginLeft: '2px' }}>G</span><span style={{ marginLeft: '2px' }}>N</span></h2>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default LandingPage;



