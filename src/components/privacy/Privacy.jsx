import React from 'react'
import { Link } from 'react-router-dom'
const Privacy = () => {
  return (
      <div className='text-dark p-2 shadow normal m-4'>
          <div className="privacy-heading text-center">
              <h1 className='fw-100'>
                  Privacy Policy for Smart School
              </h1>  
          </div>

          <div className="privacy-intro">
              Welcome to Smart School!
              This privacy policy outlines how we collect, use,
              share, and protect personal information related to
              our school management system. By using our system,
              you agree to the terms described in this policy.
          </div>

          <div className="privacy-info-collect mx-4">
              <h2 className='px-4'>
                  Information We Collect
              </h2>

              1. Student Information:
              <li className='mx-4'>
                  We collect student data such as names, contact
                  details,
                  academic records, attendance, and other relevant
                  information necessary for managing student
                  activities within the system.
              </li> 
              2. Faculty and Staff Information:
              <li className='mx-4'>

                  We collect information about faculty and
                  staff members, including names, roles, contact
                  details, and professional qualifications.
              </li>
              3. Parent/Guardian Information:
              <li className='mx-4'>

                  We collect parent/guardian details for
                  communication purposes, including names, email
                  addresses, and phone numbers.
              </li >
              4. System Usage Data:
              <li className='mx-4'>

                  We collect data related to system usage,
                  including login times, IP addresses, and browser
                  information.
              </li>

          </div>

          <div className="privacy-use-info">
              
              <h2 className='text-center'>
                  How We Use the Information

              </h2>

              <div className="div-privacy-use mx-4">
                  
                  1. Student Management:
                  <li className='mx-4'>
                  We use student information to manage enrollment, attendance, grades, and academic progress.
                  </li> 
               
                      2. Communication:
                  <li className='mx-4'>
                      We use contact details to communicate with students, parents, and faculty members regarding school-related matters.
                  
                      
                </li>
                
                  3. System Improvement:
                  <li className='mx-4'>
                      We analyze system usage data to improve our services, enhance security, and optimize performance.
              </li> 
              </div>

              
              <div className="div-privacy-data mx-4">
                  <h2 className='text-center'>
                      Data Security

                  </h2>

                  1. Data Encryption:
                  <li className='mx-4'>
                      We use encryption protocols to protect data during transmission and storage.
                  </li>

                  2. Access Control:
                  <li className='mx-4'>
                      Access to personal information is restricted to authorized personnel only.
                  </li>

               
              </div>

              <div className="div-privacy-data mx-4">
                  <h2 className='text-center'>
                      Third-Party Services

                  </h2>

                  1.Analytics Tools:
                  <li className='mx-4'>
                     We may use analytics tools (e.g., Google Analytics) to track system usage and improve user experience.  </li>

                  2. Cookies:
                  <li className='mx-4'>
                  Our system may use cookies to enhance functionality and personalize user experiences.  </li>


              </div>
              <div className="div-privacy-data mx-4">
                  <h2 className='text-center'>
                      Your Rights

                  </h2>

                  1.Access and Correction
                  <li className='mx-4'>
                  You have the right to access and correct your personal information.
                  </li>

                  2. Withdrawal of Consent:
                  <li className='mx-4'>
                      You can withdraw consent for data processing at any time.
                  </li>


              </div>

              <div className="div-privacy-data mx-4">
              
                  <h2 className='text-center'>
                      Contact Us
                  </h2>
                  If you have any questions or concerns about our privacy practices,
                  please contact us at
                  <br />
                  <Link>
                      contact@smartschool.gmail.com
                  </Link>  
</div>
          </div>

    </div>
  )
}

export default Privacy