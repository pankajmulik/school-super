import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Lottie from 'lottie-react';

// Import your images and animation JSON files
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import bg from './img/bg.png';
import slide1 from './slide1.json';
import slide2 from './slide2.json';
import animationData from './animi1.json';

function MyCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [fade, setFade] = useState(true); // State to control the fade effect

  // Function to handle slide selection
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
    setFade(true); // Set fade to true on slide change to trigger the fade-in effect
  };

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % 3; // Adjust the number based on the number of slides
      setIndex(newIndex);
    }, 8000); // Change slide every 8 seconds (8000 milliseconds)

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div >
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} fade={fade} style={{ width: '100%', height: '500px' }}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img className='d-block w-100' src={img1} alt='img1' style={{ maxHeight: '480px', objectFit: 'cover' }} />
            {/* Content for larger screens */}
            <div className="d-none d-md-block" style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', color: 'white', maxWidth: '60%' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Centering horizontally */}
                <div style={{
                  marginRight: '20px',
                  maxWidth: '70%',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px 10px blue, 0 0 20px 10px orange',
                  padding: '20px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust the opacity and color as needed
                }}>
                  <h3 className="display-4">Welcome to Super School</h3>
                  <p className="lead">where every day holds the promise of new adventures and exciting discoveries.
                    Step into our vibrant community and feel the energy of learning all around you.
                    Here, we celebrate diversity and encourage every student to shine bright in their own unique way.</p>
                  <button type="button" className="btn btn-warning">Join Now</button>
                </div>
              </div>
            </div>
            {/* Animation for larger screens */}
            <div className="d-none d-md-block" style={{ position: 'absolute', top: '2%', right: '50%' }}>
              <div style={{ maxWidth: '30%', marginRight: '20px' }}>
                <Lottie animationData={slide1} />
              </div>
            </div>
            {/* Content for smaller screens */}
            <div className="d-md-none bg-primary text-white p-3">
              <h3>Welcome to Super School</h3>
              <p>Where Learning Knows No Boundaries. Join a Community of Faithful Learners Pursuing Excellence.

              </p>
              <button type="button" className="btn btn-warning">Join Now</button>
            </div>
          </div>
        </Carousel.Item>


        {/* Slide 2 */}
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img className='d-block w-100' src={img2} alt='img2' style={{ maxHeight: '480px', objectFit: 'cover' }} />
            <div className="d-none d-md-flex justify-content-center align-items-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', maxWidth: '80%', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.6)', boxShadow: '0 0 20px 10px blue, 0 0 20px 10px purple, 0 0 20px 10px orange', animation: 'glow 2s infinite alternate' }}>
              <div className="container">
                <h3 className="display-4">Make A Bright Future For Your Child</h3>
                <button type="button" className="btn btn-primary mt-3">Learn More</button>
              </div>
              <Lottie animationData={slide2} />
            </div>
          </div>
          {/* Content for smaller screens */}
          <div className="d-md-none bg-primary text-white p-3">
            <h3>Make A Bright Future For Your Child</h3>
            <p>"Empower Your Child's Dreams with Super School"</p>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img className='d-block w-100' src={img3} alt='img3' style={{ maxHeight: '480px', objectFit: 'cover' }} />
            <div className="d-none d-md-block" style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', textAlign: 'left', color: 'white', maxWidth: '30%', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px 10px blue, 0 0 20px 10px orange', animation: 'glow 2s infinite alternate' }}>
              <h3 className="display-4" style={{ marginBottom: '10px' }}>Explore Your Knowledge: Start Your Journey</h3>
              <p className="lead" style={{ fontSize: '1.2em', marginBottom: '20px' }}>Building Foundations, Shaping Futures: Enroll Today!!</p>
              <p style={{ fontSize: '1em' }}>Come be a part of the fun and learning at [Super School]. You'll make new friends, discover new things, and have the best time ever!</p>
            </div>
          </div>
          {/* Content for smaller screens */}
          <div className="d-md-none bg-primary text-white p-3">
            <h3>Explore Your Knowledge: Start Your Journey</h3>
            <p>Building Foundations, Shaping Futures: Enroll Today</p>
          </div>
          {/* Animation and background image */}
          <div style={{ position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)' }}>
            <img src={bg} alt="Your Image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            <Lottie animationData={animationData} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
