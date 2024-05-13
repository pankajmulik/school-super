import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Typewriter from "typewriter-effect";
import heroimg from './assets/images/heroimg.jpg'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "react-bootstrap";
import bai from "./assets/images/bai.jpg";
import chidrensday from "./assets/images/childrens.jpg";
import constituons from "./assets/images/constitution.jpg";
import diwali from "./assets/images/diwali.jpeg";
import shivaji from "./assets/images/download.jpeg";
import adha from "./assets/images/eid-al-adha.jpg";
import fitr from "./assets/images/eid-al-fitr.jpeg";
import gandhi from "./assets/images/gandhi.jpeg";
import ganesh from "./assets/images/ganesh.jpeg";
import holi from "./assets/images/holi.jpeg";
import indep from "./assets/images/independence.jpeg";
import shiv from "./assets/images/mahashivaratri.jpg";
import may from "./assets/images/may.jpg";
import newyear from "./assets/images/newyear.jpeg";
import parsi from "./assets/images/parsi.jpg";
import rep from "./assets/images/rep.jpeg";
import yoga from "./assets/images/yoga.jpg";
import acad from"./assets/images/acad.jpeg";
import ore from "./assets/images/ore.jpeg";
import exam from"./assets/images/exam.jpg";
import ptm from "./assets/images/ptm.jpg";
import sports from"./assets/images/sports.jpeg";
import annual from "./assets/images/annual.jpeg";
import mtb from "./assets/images/mtb.jpeg";
import sterm from "./assets/images/sterm.jpeg";
import sci from "./assets/images/sci.jpeg";
import winter from "./assets/images/winter.jpeg";
import wi from "./assets/images/wi.jpeg";
import prize from "./assets/images/prize.jpeg";
import end from "./assets/images/end.jpg";
import excursion from "./assets/images/excursion.jpeg";
import debate from "./assets/images/debate.jpeg";
import feild from "./assets/images/feild.jpg";
import art from "./assets/images/art.jpeg";
import cultural from "./assets/images/cultural.jpeg"
import sm from "./assets/images/sm.jpg";
import drama from "./assets/images/drama.jpeg";
import FixedImage from "../../fixedimage/FixedImage";

import './Calender.css'

const CombinedComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Republic Day",
      start: "2024-01-26",
      image: rep,
      description:
        "India's national holiday celebrating the adoption of the constitution.",
    },
    {
      title: "Shivaji Jayanti",
      start: "2024-02-19",
      image: shivaji,
      description:
        "Birth anniversary of Chhatrapati Shivaji Maharaj, a revered Maratha warrior king.",
    },
    {
      title: "Holi",
      start: "2024-03-29",
      image: holi,
      description:
        "The colorful festival of colors celebrating spring and the triumph of good over evil.",
    },
    {
      title: "Baisakhi",
      start: "2024-04-14",
      image: bai,
      description:
        "Sikh harvest festival also celebrating the formation of the Khalsa.",
    },
    {
      title: "May Day",
      start: "2024-05-01",
      image: may,
      description:
        "International Workers' Day celebrating the achievements of labor movements.",
    },
    {
      title: "International Day of Yoga",
      start: "2024-06-21",
      image: yoga,
      description:
        "Global day promoting the physical and mental benefits of yoga.",
    },
    {
      title: "Independence Day",
      start: "2024-08-15",
      image: indep,
      description:
        "India's national holiday celebrating its independence from British rule.",
    },
    {
      title: "Parsi New Year",
      start: "2024-08-19",
      image: parsi,
      description:
        "New Year's Day for the Parsi community based on the Zoroastrian calendar.",
    },
    {
      title: "Ganesh Chaturthi",
      start: "2024-09-10",
      image: ganesh,
      description:
        "Hindu festival celebrating the birth of Lord Ganesha, the elephant-headed god of wisdom.",
    },
    {
      title: "Gandhi Jayanti",
      start: "2024-10-02",
      image: gandhi,
      description:
        "Birth anniversary of Mahatma Gandhi, the leader of the Indian independence movement.",
    },
    {
      title: "Children's Day",
      start: "2024-11-14",
      image: chidrensday,
      description:
        "A day dedicated to celebrating children and promoting their rights and well-being.",
    },
    {
      title: "Constitution Day",
      start: "2024-11-26",
      image: constituons,
      description:
        "Commemorates the adoption of the Indian Constitution, a defining moment in India's history.",
    },
    {
      title: "Christmas",
      start: "2024-12-25",
      image:
        "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/24/Pictures/december-hindustan-christmas-december-school-students-celebrating_9394186e-e8a7-11e7-bb33-29502a427e3f.jpg",
      description: "Christian festival celebrating the birth of Jesus Christ.",
    },
    {
      title: "New Year's Day",
      start: "2025-01-01",
      image: newyear,
      description: "Celebrates the beginning of a new calendar year.",
    },
    {
      title: "Eid al-Fitr",
      start: "2024-04-12",
      image: fitr,
      description:
        "Islamic festival marking the end of Ramadan, a holy month of fasting.",
    },
    {
      title: "Diwali",
      start: "2024-10-24",
      image: diwali,
      description:
        "The festival of lights, a major Hindu festival celebrating the triumph of good over evil.",
    },
    {
      title: "Eid al-Adha",
      start: "2024-06-15",
      image: adha,
      description:
        "Islamic festival of sacrifice, commemorating Prophet Abraham's willingness to sacrifice his son.",
    },
    {
      title: "Maha Shivaratri",
      start: "2024-02-13",
      image: shiv,
      description:
        "Hindu festival celebrating the night of Lord Shiva, the destroyer and regenerator god.",
    },
    {
      title: "Academic Year Begins",
      start: "2024-06-12",
      image: acad,
      description:
        "Marks the start of the new academic year in educational institutions.",
    },
    {
      title: "New Admissions & Orientation",
      start: "2024-06-13",
      image: ore,
      description:
        "Welcomes new students and introduces them to the academic environment.",
    },
    {
      title: "First Term Examination",
      start: "2024-09-05",
      image: exam,
      description:
        "The first set of examinations for the academic term.",
    },
    {
      title: "Parent-Teacher Meeting",
      start: "2024-09-15",
      image: ptm,
      description:
        "Meeting between parents and teachers to discuss student progress.",
    },
    {
      title: "Sports Day",
      start: "2024-09-20",
      image: sports,
      description:
        "A day dedicated to athletic competitions and showcasing student fitness.",
    },
    {
      title: "School Annual Function",
      start: "2024-10-10",
      image: annual,
      description:
        "A celebration of the school year with performances, speeches, and awards.",
    },
    {
      title: "Mid-Term Break",
      start: "2024-10-20",
      image: mtb,
      description:
        "A short break between the first and second terms of the academic year.",
    },
    {
      title: "Second Term Begins",
      start: "2024-10-25",
      image: sterm,
      description:
        "Marks the start of the second term of the academic year.",
    },
    {
      title: "Science Exhibition",
      start: "2024-11-10",
      image: sci,
      description:
        "Students showcase their scientific experiments and projects.",
    },
    {
      title: "Second Term Examination",
      start: "2024-12-10",
      image: exam,
      description:
        "The second set of examinations for the academic term.",
    },
    {
      title: "Winter Break Begins",
      start: "2024-12-20",
      image: winter,
      description: 
        "Extended vacation period during the winter season.",
    },
    {
      title: "School Reopens after Winter Break",
      start: "2025-01-10",
      image: wi,
      description:
        "Resumption of classes after the winter break.",
    },
    {
      title: "Final Term Examination",
      start: "2025-03-10",
      image: exam,
      description:
        "The final set of examinations for the academic year.",
    },
    {
      title: "Annual Prize Distribution",
      start: "2025-03-20",
      image: prize,
      description:
        "Ceremony to acknowledge student achievements and award prizes.",
    },
    {
      title: "End of Academic Session",
      start: "2025-04-24",
      image: end,
      description:
        "Marks the conclusion of the academic year.",
    },
    {
      title: "School Excursion",
      start: "2024-07-10",
      image: excursion,
      description:
        "An educational trip for students to explore a location outside the school.",
    },
    {
      title: "Debate Competition",
      start: "2024-07-25",
      image: debate,
      description:
        "An event where students compete in formal debates on a given topic.",
    },
    {
      title: "Field Trip",
      start: "2024-08-15",
      image: feild,
      description:
        "An educational trip for students to a specific location related to their studies.",
    },
    {
      title: "Parent-Teacher Meeting",
      start: "2024-08-25",
      image: ptm,
      description:
        "Meeting between parents and teachers to discuss student progress.",
    },
    {
      title: "Art Exhibition",
      start: "2024-11-05",
      image: art,
      description:
        "Students showcase their artistic creations in a public exhibition.",
    },
    {
      title: "Cultural Day",
      start: "2024-11-15",
      image: cultural,
      description:
        "A celebration of diverse cultures through performances, music, and displays.",
    },
    {
      title: "Inter-School Sports Meet",
      start: "2025-02-10",
      image: sm,
      description:
        "A sporting competition between students from different schools.",
    },
    {
      title: "Drama Performance",
      start: "2025-03-05",
      image: drama,
      description:
        "A presentation of a theatrical play by students.",
    },
  ];
  
  const handleEventClick = (info) => {
    // Display notification using React Toastify
    toast.info(`Event: ${info.event.title}`);

    // Open a modal with the event image and a close button
    setShowModal(true);
    setSelectedEvent(info.event);
  };

  const handleCloseModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      
      <h2 className="text-center text-info-emphasis fw-bolder bg-light pb-2 mt-2 shadow rounded" style={{fontSize:'45px'}}>Academics and Events</h2>
      <div
        className="hero d-flex align-items-center justify-content-center mt-2"
        style={{
          height: "80vh",
          backgroundColor: "salmon",
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ fontSize: "4rem", color: "white" }}>
          <Typewriter
            options={{
              strings: ["Academics & Events Calendar"],
              autoStart: true,
              loop: true,
              cursor: '<span style="font-size: 4rem;">|</span>',
            }}
          />
        </div>
      </div>

      <Container className="p-5 mt-5">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height={"90vh"}
          events={events}
          eventContent={(eventInfo) => {
            const { title, image } = eventInfo.event._def.extendedProps;
            return (
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "15vh",
                  // width:"8vw",
                  backgroundColor: "#fff",
                }}
              >
                <p style={{ color: "#fff", margin: 0 }}>{title}</p>
              </div>
            );
          }}
          eventClick={handleEventClick}
        />
        {selectedEvent && (
          <Modal
          show={showModal}
          onHide={handleCloseModal}
          centered
       id='cal-mod-d' >
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Check if extendedProps exist and contains image and description */}
            {selectedEvent.extendedProps ? (
              <>
                <img
                  src={selectedEvent.extendedProps.image}
                  alt={selectedEvent.title}
                  className="img-fluid"
                />
                <p className="event-description">
                  {selectedEvent.extendedProps.description}
                </p>
              </>
            ) : (
              <p>Information not available.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
  
      </Container>

      <ToastContainer
        style={{ Color: "crimson" }} // Customize toast background color
        bodyStyle={{ color: "red" }}
        progressStyle={{
          background: "linear-gradient(90deg, #780206 0%, #061161 100%)",
        }}
      />
      <div className="For_Background_Image">
        <FixedImage />
      </div>
    </Container>
  );
};

export default CombinedComponent;
