import React, { useState } from 'react';
import './CSS/CSS_FILE.css';
import './CSS/responsive.css';

function Contact() {
    const [currentStep, setCurrentStep] = useState('content4');
    const [username, setUsername] = useState(''); // State for username
    const [email, setEmail] = useState(''); // State for email
    const [query, setQuery] = useState(''); // State for query
    const [nameError, setNameError] = useState(''); // State for name error
    const [emailError, setEmailError] = useState(''); // State for email error

    const validateName = () => {
        if (!username.trim()) {
            setNameError('Please enter your name');
            document.getElementById('username').placeholder = 'Name is required';
            return false;
        } else {
            setNameError('');
            setCurrentStep('content5');
            return true;
        }
    };

    const validateEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            document.getElementById('email').placeholder = 'Email is required';
            setEmailError('Email address is needed*');
            return false;
        } else if (!re.test(email)) {
            // document.getElementById('email').style.color = 'red';
            setEmailError('Please enter a valid email address*');
            return false;
        } else if (re.test(email)) {
            setEmailError('');
            return true;
        }
    };

    const handleSubmit = async () => {
        try {
            const formData = { username, email, query };
            // Example using fetch API
            const response = await fetch('/api/formdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setCurrentStep('content6'); // Move to success step on successful submission
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const backToName = () => {
        setCurrentStep('content4');
        setEmailError('');
    };

    const handleFormSubmit = () => {
        if (validateEmail()) {
            handleSubmit();
        }
    };

    return (
        <div>
            <div className="section" id="contact">
                {currentStep === 'content4' && (
                    <div className="content4" id="content4">
                        <div className="contacthead">
                            <h1>
                                <center>Hire Me</center>
                            </h1>
                        </div>
                        <div className="contactsub">
                            <center>Complete the form to get in touch with me</center>
                        </div>
                        <div className="input">
                            <div><i className="bi bi-person"></i></div>
                            <input type="text" id="username" name="username" placeholder="Enter Your Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <button onClick={validateName} className="getstarted">Get Started</button>
                        {nameError && <center><p style={{ color: 'red' }} className="error">{nameError}</p></center>}
                    </div>
                )}

                {currentStep === 'content5' && (
                    <div className="content5" id="content5">
                        <div className="contactsub">
                            <center>Your Email*</center>
                        </div>
                        <div className="input">
                            <div><i className="bi bi-envelope"></i></div>
                            <input type="text" id="email" name="username" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="textarea">
                            <textarea type="text" id="query" name="username" placeholder="Tell me about your needs" value={query} onChange={(e) => setQuery(e.target.value)}></textarea>
                        </div>
                        <div className="twobutt">
                            <button onClick={backToName} className="backtoname"><i className="bi bi-arrow-left-short"></i></button>
                            <button onClick={() => { validateEmail(); handleFormSubmit(); }} className="submit">Submit</button>
                        </div>
                        {emailError && <center><p style={{ color: 'red' }} className="error">{emailError}</p></center>}
                    </div>
                )}

                {currentStep === 'content6' && (
                    <div className="content6" id="content6">
                        <div className="contacthead">
                            <h1>
                                <center>Thank You!</center>
                            </h1>
                        </div>
                        <div className="contactsub">
                            <center>Your message is on its way and I will try to respond as soon as possible.</center>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
