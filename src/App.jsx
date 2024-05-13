import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import Footer from './components/footer/Footer'
import WhySuperSchool from './components/pages/whySuperSchool/WhySuperSchool'
import CoCurriculumActivity from './components/pages/Co-curriculum Activity/CoCurriculumActivity'
import PrincipalDesk from './components/pages/Principal Desk/PrincipalDesk'
import OurVisionMission from './components/pages/Our Vision & Mission/OurVisionMission'
import Achievements from './components/pages/Achievements/Achievements'
import Admission from './components/pages/admission/Admission';
import Staff from './components/pages/Staffs/Staff'
import Courses from './components/pages/courses/Courses'
import SchoolAmenties from './components/pages/schoolamenties/SchoolAmenties'
import Calender from './components/pages/calender/Calender'
import News from './components/pages/newsandblogs/News'

import BlogPage from './components/pages/blog/BlogPage'
import Privacy from './components/privacy/Privacy'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/WhySuperSchool' element={<WhySuperSchool />} />
        <Route path='/admission' element={ <Admission/>} />
        <Route path='/CoCurriculumActivity' element={<CoCurriculumActivity />} />
        <Route path='/PrincipalDesk' element={<PrincipalDesk />} />
        <Route path='/OurVisionMission' element={<OurVisionMission />} />
        <Route path='/Achievements' element={<Achievements />} />
        <Route path='/school-amenties' element={<SchoolAmenties/>}></Route>
        <Route path='/faculty-staff' element={<Staff />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/calender-events' element={<Calender />} />
        
        {/* news and blog */}

        <Route path='/news' element={<News />} />

        <Route path='/blogs' element={<BlogPage/>} />
       
        <Route path='/privacy-policy' element={<Privacy/>} />
       
       
        {/* No Pages Available Route */}
        <Route path='*' element={<div className='container d-flex justify-content-center align-items-center' style={{ height: '78vh' }}><img src="./errorpage.avif" alt="404" height={220} /></div>} />
     
     
        

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
