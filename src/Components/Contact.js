import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faHeart, faHandPeace } from '@fortawesome/free-solid-svg-icons';
import samEmoji from '../images/samEmoji.png';




const Contact = () => {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);



    const sendEmail = (e) => {
        e.preventDefault();

        // Check if the form is valid before sending the email
        if (form.current.checkValidity()) {
            emailjs
                .sendForm('service_qpmd5ro', 'template_hqgwcwa', form.current, 'xQ66AHGXj1hNMoXBs')
                .then((result) => {
                    console.log(result.text);
                    setIsModalOpen(true);
                    form.current.reset();
                })
                .catch((error) => {
                    console.log(error.text);
                    alert('Failed to send the message. Please try again later.');
                });
        } else {
            // If the form is not valid, display an error message or take appropriate action
            alert('Please fill out all the required fields before sending the message.');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mt-5" style={{ paddingTop: '100px', paddingBotton: '100px' }}>
            <div className="row">
                <div className="col-md-6 mb-4" >
                    {/* Contact Details */}
                    <h1 style={{ fontSize: '60px', color: '#025959' }}>Let's Connect</h1>
                    <p style={{ fontSize: '20px', color: '#025959' }}>Hey! <FontAwesomeIcon icon={faHandPeace} style={{ color: '#F28705' }} />  Whether you have questions, interests, or simply want to say hello, I would be thrilled to hear from you. Feel free to reach out and share your thoughts, and I'll be sure to respond as soon as possible. Thank you for getting in touch! <FontAwesomeIcon icon={faHeart} style={{ color: '#F28705' }} /></p>
                    <br />
                    <h3 style={{ color: '#025959' }}><FontAwesomeIcon icon={faPhone} style={{ color: '#F28705' }} /> : 0834341813</h3>
                    <br />
                    <h3 style={{ color: '#025959' }}><FontAwesomeIcon icon={faAt} style={{ color: '#F28705' }} /> : samantha.quinlan@gmail.com</h3>
                </div>
                <div className="col-md-6">
                    {/* Contact Form */}
                    <div className="d-flex justify-content-center"> {/* Center form within column */}
                        <form className="frm" ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="user_name" className="form-label">
                                    <span style={{ color: '#025959', fontSize: '20px' }}>Name</span>
                                </label>
                                <input type="text" className="form-control" name="user_name" id="user_name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user_email" className="form-label">
                                    <span style={{ color: '#025959', fontSize: '20px' }}> Email</span>
                                </label>
                                <input type="email" className="form-control" name="user_email" id="user_email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    <span style={{ color: '#025959', fontSize: '20px' }}>Message</span>
                                </label>
                                <textarea className="form-control" name="message" id="message" rows="5" required />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn-epic btn-primary btn-lg" style={{
                                    backgroundColor: '#025959',
                                    border: isHovered ? '2px solid #025959' : '2px solid #025959',
                                    borderRadius: '30px',
                                    color: '#025959',
                                    display: 'inline-block',
                                    marginTop: '10px', // Add some margin to separate from the title
                                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                    backgroundColor: isHovered ? '#025959' : '#fff',
                                    color: isHovered ? '#fff' : '#025959',
                                    transition: 'transform 0.2s ease-in-out',
                                    padding: '10px 20px',
                                    textDecoration: 'none',
                                }}

                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Message Sent">

                <h2 className="text-center" >Message Sent Successfully!</h2>
                <div className="d-flex justify-content-center">
                    <img src={samEmoji} alt="Pop-up Image" />
                </div>
                <h3 className="text-center">Thank you!</h3>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary btn-lg"
                        style={{
                            backgroundColor: '#F28705',
                            border: isHovered ? '2px solid white' : '2px solid #F28705',
                            borderRadius: '30px',
                            color: '#fff',
                            display: 'inline-block',
                            marginTop: '10px', // Add some margin to separate from the title
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            backgroundColor: isHovered ? '#F28705' : '#fff',
                            color: isHovered ? '#fff' : '#F28705',
                            transition: 'transform 0.2s ease-in-out',
                            padding: '10px 20px',
                            textDecoration: 'none',
                        }} onClick={closeModal}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >

                        Close
                    </button>
                </div>
            </Modal>
        </div >
    );
};

export default Contact;