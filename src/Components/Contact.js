import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAt, faHeart, faHandPeace } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);


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
                    <h1 style={{ fontSize: '60px' }}>Let's Connect</h1>
                    <p style={{ fontSize: '20px' }}>Hey! <FontAwesomeIcon icon={faHandPeace} style={{ color: '#A65151' }} />  Whether you have questions, interests, or simply want to say hello, I would be thrilled to hear from you. Feel free to reach out and share your thoughts, and I'll be sure to respond as soon as possible. Thank you for getting in touch! <FontAwesomeIcon icon={faHeart} style={{ color: '#A65151' }} /></p>
                    <br />
                    <h3><FontAwesomeIcon icon={faPhone} style={{ color: '#A65151' }} /> : 0834341813</h3>
                    <br />
                    <h3><FontAwesomeIcon icon={faAt} style={{ color: '#A65151' }} /> : samantha.quinlan@gmail.com</h3>
                </div>
                <div className="col-md-6">
                    {/* Contact Form */}
                    <div className="d-flex justify-content-center"> {/* Center form within column */}
                        <form className="frm" ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="user_name" className="form-label">
                                    <span style={{ color: '#fff', fontSize: '20px' }}>Name</span>
                                </label>
                                <input type="text" className="form-control" name="user_name" id="user_name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user_email" className="form-label">
                                    <span style={{ color: '#fff', fontSize: '20px' }}> Email</span>
                                </label>
                                <input type="email" className="form-control" name="user_email" id="user_email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    <span style={{ color: '#fff', fontSize: '20px' }}>Message</span>
                                </label>
                                <textarea className="form-control" name="message" id="message" rows="5" required />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn-epic btn-primary btn-lg" style={{ backgroundColor: '#fff', border: 'none' }}>
                                    <span style={{ color: '#A65151', fontSize: '20px', fontWeight: 'bold' }}> Send </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Message Sent">
                <h2>Message Sent Successfully!</h2>
                <p>Your message has been sent. Thank you!</p>
                <button className="btn btn-primary" onClick={closeModal}>
                    Close
                </button>
            </Modal>
        </div>
    );
};

export default Contact;