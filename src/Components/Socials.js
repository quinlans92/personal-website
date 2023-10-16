import React from 'react';
import { useLocation } from 'react-router-dom';
import fbImg from '../images/facebook.png';
import igImg from '../images/instagram.png';
import liImg from '../images/linkedIn.png';
import bhImg from '../images/behance.png';



const Socials = () => {
    const location = useLocation();
    // const isAboutPage = location.pathname === '/about';

    return (

        <div className="container sidebar" style={{ color: '#fff', marginLeft: '10px' }}>
            <div className="socials-sidebar">
                <a href="https://www.facebook.com">
                    <img className='facebookIcon'
                        style={{ width: '80px', height: '80px', marginLeft: '10px' }}
                        src={fbImg}
                        alt="facebook icon"
                    />
                </a>
                <a href="https://www.instagram.com">
                    <img className='instagramIcon'
                        style={{ width: '80px', height: '80px', marginLeft: '10px' }}
                        src={igImg}
                        alt="insta icon"
                    />
                </a>
                <a href="https://www.linkedin.com">
                    <img className='linkedInIcon'
                        style={{ width: '80px', height: '80px', marginLeft: '10px' }}
                        src={liImg}
                        alt="linkedIn icon"
                    />
                </a>
                <a href="https://www.linkedin.com">
                    <img className='behanceIcon'
                        style={{ width: '80px', height: '80px', marginLeft: '10px' }}
                        src={bhImg}
                        alt="behance icon"
                    />
                </a>
            </div>
        </div>

    )
}

export default Socials






