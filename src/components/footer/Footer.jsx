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
import { Link } from 'react-router-dom';
function Footer() {
    return (
<<<<<<< HEAD
        <div className="footer  text-white px-4">
            <div className="container" style={{width:'140%'}}>
                
=======
        <div className="footer text-white">
            <div className="container">
                <div className="row">
                    <div className="col col-md-3 col-sm-6 sm:pb-5">
                        <img src="./hlogo1.png" alt="Logo" className="img img-fluid mb-2" style={{marginRight:'20px' ,width: '260px', objectFit:'contain'}} />
>>>>>>> d8136f7c9c4535c5dc4cfba8e6193319cac9800f

            <div className="row " >
              
                <div className="col-3 ">
                    {/* <img src="./hlogo1.png" alt="Logo" className="img img-fluid mb-2"  /> */}
                    <img src="./hlogo1.png" alt="logo" style={{ width: '100px' }} />

                    <div className="name-heading">
                        Super School
                    </div>
                    <div className="address">
                        310-311, 3rd Floor,<br /> Vipul Agora, MG Road,
                        Gurgaon,<br /> Haryana -122 002, India
                    </div>

                    <div className='icons custom-primary'>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} className="mx-0" style={{ color: '#FFFFFF' }} /></a>
                        <a href="#"><FontAwesomeIcon icon={faXTwitter} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} className="mx-2" style={{ color: '#FFFFFF' }} /></a>

                    </div>
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfzwLghTTLyrRZXuEECVrJmV2EuQ_kLvlZA&s"
                         alt="Logo" className="img img-fluid mb-2" style={{ width: logoWidth }} /> */}
                    {/* <h1 className='name-heading '>Super School</h1>
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
<<<<<<< HEAD
                    {/* </div>  */}
                </div>
                <div className="col-3 sm:pb-3">
                    <p>About Us</p>
                    <ul>

                        <li>
                            Principal Desk
                        </li>
                        <li>
                            Our Vision & Mission
                        </li>
                        <li>
                            whySuperSchool
                            </li>
                            
                            <li>
                                <Link to='/privacy-policy'>  Privacy Policy
                                </Link>
                            </li>

                    </ul>

                </div>
                <div className="col-3  sm:pb-3">

                    <p>Academics</p>
                    <ul>
                        <li>
                            Courses
                        </li>

                        <li>
                            Faculty & Staff
                        </li>
                        <li>
                            School Amenties
                        </li>
                        <li>
                            Calender & Events
                        </li>



                    </ul>
                </div>
                <div className="col-3 sm:pb-3">

                    <p> News and Blog</p>

                    <ul>
                        <li>
                            News
                        </li>
                        <li>
                            Blogs
                        </li>
                    </ul>

                </div>

              


                </div>
               
            </div>


        </div>
    );
=======
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
>>>>>>> d8136f7c9c4535c5dc4cfba8e6193319cac9800f
}

export default Footer;
