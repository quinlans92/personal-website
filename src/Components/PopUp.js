import React from 'react'


const PopUp = ({ message, imageSrc, heading }) => {
    return (
        <div>
            <div className="popup-container">
                <img src={imageSrc} alt="Pop-up Image" />
                <h2>{heading}</h2>
                <p>{message}</p>
                {/* You can add more content (images, headings, etc.) here */}
            </div>
        </div>
    )
}

export default PopUp
