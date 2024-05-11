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
                    <div className="col col-md-3 col-sm-6 sm:pb-5">
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
                     <div className="col">
                         <p>
                             About us
                         </p>
                     
                     </div>

<div className="col>
                     </div>
                
                    </div>
                </div>
            </div>
               
                         )           
}

export default Footer;
