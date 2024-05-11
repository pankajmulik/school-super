import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faXTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <div className="footer text-white">
            <div className="container">
                <div className="row">
                    <div className="cols col-md-3 col-sm-6 sm:pb-5">
                        <img src="./hlogo1.png" alt="Logo" className="img img-fluid mb-2" style={{marginRight:'20px' ,width: '260px', objectFit:'contain'}} />

                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfzwLghTTLyrRZXuEECVrJmV2EuQ_kLvlZA&s" alt="Logo" className="img img-fluid mb-2" style={{ width: logoWidth }} /> */}
                        <h1 className='name-heading '>Super School</h1>
                        <div className="address">
                            310-311, 3rd Floor, Vipul Agora, MG Road,
                            Gurgaon, Haryana -122 002, India
                        </div>
                        <div className='icons custom-primary'>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} className="mx-0" style={{ color: '#FFFFFF' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faXTwitter} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                            {/* <a href="#"><FontAwesomeIcon icon={faPinterest} style={{ color: '#FFFFFF' }} /></a> */}
                        </div>
                    </div>
                    <div className="cols col-md-3  col-sm-6 sm:pb-3">
                        <div>
                            <p style={{ color: '#FFFFFF' }} className="head font-weight-bold">About Harmony Academy</p>
                            <div className="col2-links mt-0" >
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Our Story
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        <strong>NEW!</strong> Docuseries
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Whole Human Education™
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        SEL in Action
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        SEL Research
                                    </a>
                                </p>

                            </div>
                        </div>
                        <div>

                            <p className='head2 pt-4'>Training/Support</p>
                            <div className='col2-links'>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Training Support
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Webinars
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        FAQs
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Contact Us
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cols col-md-3 col-sm-6 sm:pb-3">
                        <div className='col3-1'>
                            <p style={{ color: '#FFFFFF' }} className="head font-weight-bold">Solutions</p>
                            <div className="col3-links mt-0">
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        <strong>NEW!</strong> Harmony Kits
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        <strong>Harmony Curriculum</strong>
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Harmony PreK-6
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Harmony at Home
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Harmony Out-of-School Time
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Harmony SEL Games
                                    </a>
                                </p>
                            </div>
                        </div>
                        {/* Second Part Content */}
                        <div>
                            <p style={{ color: '#FFFFFF' }} className="head2 font-weight-bold">Harmony Professional Learning</p>
                            <div className='col3-links'>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Building Teachers Practices Pathway
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        Developing SEL Capacity Pathway
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        What is Educator SEL?
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-decoration-none hover-underline">
                                        <strong>Administrator Support</strong>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cols col-md-3 col-sm-6 sm:pb-3">
                        {/* Column 4 Content */}
                        <p className='head' style={{ color: '#FFFFFF' }}>Resources</p>
                        <div className="col2-links">
                            <p>
                                <a href="#" className="text-decoration-none hover-underline">
                                    Blog & News
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none hover-underline">
                                    SEL Hub
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none hover-underline">
                                    Testimonials
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className='line' />
            </div>
            <p className="text-center" style={{ color: '#FFFFFF' }}>&copy; 2024 Super School. All rights reserved.</p>
        </div>
    );
}

export default Footer;
