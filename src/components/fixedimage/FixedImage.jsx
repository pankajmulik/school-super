import React from 'react'
import { useNavigate } from 'react-router-dom'

const FixedImage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
       navigate('/contact-us')
    }
    return (
        <div className='For_Background_Image'>

            <div className="imagefix1"><h1>Tell Us What Are You Looking For</h1>
                <h3 className='text-primary'>It strives to deliver value-based quality education and imbibe top-class management skills</h3>
           
                    <button className='contact_us_button' onClick={handleClick}>CONTACT US</button>
            </div>

        </div> 
  )
}

export default FixedImage