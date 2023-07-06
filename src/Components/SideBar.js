import React from 'react';
import fbImg from '../images/facebook.png';
import igImg from '../images/instagram.png';
import liImg from '../images/linkedIn.png';
import bhImg from '../images/behance.png';



const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="socials-sidebar">
                <a href="https://www.facebook.com">
                    <img className='facebookIcon'
                        style={{ width: '45px', height: '45px' }}
                        src={fbImg}
                        alt="facebook icon"
                    />
                </a>
                <a href="https://www.instagram.com">
                    <img className='instagramIcon'
                        style={{ width: '45px', height: '45px' }}
                        src={igImg}
                        alt="insta icon"
                    />
                </a>
                <a href="https://www.linkedin.com">
                    <img className='linkedInIcon'
                        style={{ width: '45px', height: '45px' }}
                        src={liImg}
                        alt="linkedIn icon"
                    />
                </a>
                <a href="https://www.linkedin.com">
                    <img className='behanceIcon'
                        style={{ width: '45px', height: '45px' }}
                        src={bhImg}
                        alt="behance icon"
                    />
                </a>
            </div>
            <div className="welcome-sidebar">
                <p>Welcome</p>
            </div>
        </div>

    )
}

export default SideBar
