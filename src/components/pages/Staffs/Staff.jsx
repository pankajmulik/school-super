import React from 'react'
import banner from './assets/banner-2.png'
import "./Staff.css"; 
import "./About.css";
import teacher1 from './assets/teacher1.jpg'
import teacher2 from './assets/teacher2.jpg'
import teacher3 from './assets/teacher3.jpg'
import teacher4 from './assets/teacher4.jpg'
import teacher5 from './assets/teacher5.jpg'
import teacher6 from './assets/teacher6.jpg'
import tech1 from './assets/tech1.jpg'
import tech2 from './assets/tech2.jpg'
import tech3 from './assets/tech3.jpg'
import tech4 from './assets/tech4.jpg'
import tech5 from './assets/tech5.jpg'
import tech6 from './assets/tech6.jpg'
import FixedImage from '../../fixedimage/FixedImage';



const Staff = () => {
  return (
    <div className='container-fluid p-0'>
      
  <img src={banner} alt='banner' className='img-fluid custom-img' style={{height: '600px'}} />


   <div className='bg-primary text-white text-center p-3' >
   <h1 className='text-center text-light'>
        Head Of the School
      </h1>
      </div>
      <div className="container mt-3 mb-1">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="flip-card p-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={teacher1}
                    alt="Front"
                    className="img-fluid h-75 "
                    
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mrs. Smith-Founder</h5>
                    
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title-2">Mrs. Smith</h5>
                    <p className="card-text">
                    Name: Mrs. Smith
Education: Bachelor's in Education (B.Ed)
Special Position:Founder
Additional Information: Founded The super school
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above <div className="col"> for other cards */}
          <div className="col">
            <div className="flip-card p-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <img
                    src={teacher3}
                    alt="Front"
                    className="img-fluid h-75"
                    
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mr. John-CoFounder</h5>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title-2">Mr. Johnson</h5>
                    <p className="card-text">
                    Name: Mr. Johnson
Education: Master's in Education
Special Position: CoFounder
Additional Information: Mr. Johnson is passionate about environmental studies and often organizes nature walks to enhance students' understanding of the subject.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card p-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <img
                    src={teacher4}
                    alt="Front"
                    className="img-fluid h-75"
                    
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mr. Brown-Principal</h5>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title-2">Mr. Brown</h5>
                    <p className="card-text">
                    Name: Mr. Brown
Education: Bachelor's in Education (B.Ed)
Special Position:Principal
Additional Information: Mr. Brown is a fitness enthusiast and conducts morning fitness sessions for students to promote a healthy lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card p-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <img
                    src={teacher6}
                    alt="Front"
                    className="img-fluid h-75"
                    
                  />
                  <div className="card-body">
                    <h5 className="card-title p-1">Mr. Davis-VicePrincipal</h5>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title-2">Mr. Davis</h5>
                    <p className="card-text">
                    Name: Mr. Davis
Education: Master's in Education
Special Position: VicePrincipal
Additional Information: Mr. Davis is a talented artist and musician herself, often incorporating her own artwork and musical compositions into her lessons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card p-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <img
                    src={teacher2}
                    alt="Front"
                    className="img-fluid h-75"
                    
                  />
                  <div className="card-body">
                    <h5 className="card-title p-1">Mrs.Williams-Manager</h5>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title-2">Mrs. Lee</h5>
                    <p className="card-text">
                    Name: Mrs. Lee
Education: Master's in Education
Special Position: Manager
Additional Information: Mrs.Lee is a talented artist and musician herself, often incorporating her own artwork and musical compositions into her lessons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flip-card p-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <img
                    src={teacher5}
                    alt="Front"
                    className="img-fluid h-75"
                    
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mrs. Lee-Secreatory</h5>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-body">
                    <h5 className="card-title-2">Mrs. Williams</h5>
                    <p className="card-text">
                    Name: Mrs. Williams
Education: Bachelor's in Education (B.Ed)
Special Position:Secreatory
Additional Information: Miss Williams is also the school's debate coach and has led the debate team to several victories at the district level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className='bg-primary text-white text-center p-3'>
   <h1 className='text-center text-black'>
        Staff And Faculty
      </h1>
      </div>
      <div className="container pt-3">
     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {/* First row */}
    <div className="col">
      <div className="founder-card rounded-3 mx-5">
        <img
          src={tech1}
          className="card-img-top rounded-3"
          alt="Person 1"
          style={{ height: "300px", width: "300px" }}
        />
        <div className="founder-body slide">
          <h5 className="founder-title">Mr.Wilson</h5>
          <p className="founder-text">
            Name: Mr. Wilson<br></br>
            Education: Bachelor's Degree<br></br>
            Specialization: Civics<br></br>
            Additional Info: Mr. Wilson is also the school's debate coach and has led the debate team to several victories at the district level.
          </p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="founder-card rounded-3 mx-5">
        <img
          src={tech2}
          className="card-img-top rounded-3"
          alt="Person 1"
          style={{ height: "300px", width: "300px" }}
        />
        <div className="founder-body slide">
          <h5 className="founder-title">Miss Anderson</h5>
          <p className="founder-text">
            Name: Miss Anderson<br></br>
            Education: Bachelor's Degree<br></br>
            Specialization: English<br></br>
            Additional Info: Miss Anderson is also the school's debate coach and has led the debate team to several victories at the district level.
          </p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="founder-card rounded-3 mx-5">
        <img
          src={tech3}
          className="card-img-top rounded-3"
          alt="Person 1"
          style={{ height: "300px", width: "300px" }}
        />
        <div className="founder-body slide">
          <h5 className="founder-title">Mr. White</h5>
          <p className="founder-text">
            Name: Mr. White<br></br>
            Education: Bachelor's Degree<br></br>
            Specialization: Geography<br></br>
            Additional Info:  Mr.White is also the school's debate coach and has led the debate team to several victories at the district level.
          </p>
        </div>
      </div>
    </div>
   
    <div className="col">
      <div className="founder-card rounded-3 mx-5">
        <img
          src={tech4}
          className="card-img-top rounded-3"
          alt="Person 1"
          style={{ height: "300px", width: "300px" }}
        />
        <div className="founder-body slide">
          <h5 className="founder-title">Mr. Clark</h5>
          <p className="founder-text">
            Name: Mr. Clark<br></br>
            Education: Bachelor's Degree<br></br>
            Specialization: Science<br></br>
            Additional Info:  Mr.Clark is also the school's debate coach and has led the debate team to several victories at the district level.
          </p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="founder-card rounded-3 mx-5">
        <img
          src={tech5}
          className="card-img-top rounded-3"
          alt="Person 1"
          style={{ height: "300px", width: "300px" }}
        />
        <div className="founder-body slide">
          <h5 className="founder-title">Mr. Martinez</h5>
          <p className="founder-text">
            Name: Mr. Martinez<br></br>
            Education: Bachelor's Degree<br></br>
            Specialization: Maths<br></br>
            Additional Info:  Mr.Martinez is also the school's debate coach and has led the debate team to several victories at the district level.
          </p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="founder-card rounded-3 mx-5">
      <div className="position-relative">
  <img
    src={tech6}
    className="card-img-top rounded-3"
    alt="Person 1"
    style={{ height: "300px", width: "300px" }}
  />
   {/* <div className="position-absolute bottom-0 start-50 translate-middle-x bg-black">
    <h5 className="text-white">Miss Thompson</h5>
  </div> */}
</div>

        <div className="founder-body slide">
          <h5 className="founder-title">Miss. Thompson</h5>
          <p className="founder-text">
            Name: Miss. Thompson<br></br>
            Education: Bachelor's Degree<br></br>
            Specialization: Economics<br></br>
            Additional Info: Miss Thompson is also the school's debate coach and has led the debate team to several victories at the district level.
          </p>
        </div>
      </div>
    </div>
    
  </div>
</div>
      <div className="For_Background_Image">
        <FixedImage />
      </div>
    </div>
  )
}

export default Staff
