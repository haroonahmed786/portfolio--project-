import React from 'react';
import "./PortFolio.css";
import Pic from "../../images/mypic.jpg";
import { useNavigate } from 'react-router-dom';

export const PortFolio = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="Maindiv">
        <div className='Navbar' id="meeting">
          <div className='button'>
            <button className='btn' onClick={
              () => {
                const mydiv = document.getElementById("about");
                mydiv.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }>About</button>

            <button className='btn' onClick={
              () => {
                const mydiv = document.getElementById("project");
                mydiv.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }>Projects</button>
            <button className='btn' onClick={
              () => {
                const mydiv = document.getElementById("contact");
                mydiv.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }>contact</button>
            <button className='btn' type="button" onClick={() => navigate("/Project")}>Links</button>
          </div>
        </div>

        <div className='Contact'>
          <div><div className='Name'><h1>Hey, I'm Haroon </h1>
            <p className='para'>I'm a  web developer. I have a passion for web developer and love to creating website.</p>
            <div className='cont-butn'>
              <button className='btn1' onClick={
                () => {
                  const mydiv = document.getElementById("contact1");
                  mydiv.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              }>ContactMe</button>
              <button className='btn2'>Resume</button> </div>
          </div>

          </div>

          <div className='picture'>
            <div className='item-one'>
              <div className='item-two'><  img src={Pic} alt='' height="200px" width="205px" /></div>
            </div>
          </div>
        </div>

      </div>
      <div className='container1' id="about">
        <h1 className='who'>Who I am</h1>
        <p className='para1'>I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.
          I kick started my professional career as a mobile application developer working remotely for a UK based startup — Lessgo.</p>
        <p className='para2'>The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram,
          helping people who are just getting into the space of programming.</p>
        <p className='para3'>When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.</p>
      </div>
      <div className='container2'>
        <h1 className='do'>What I do</h1>
        <div className='cont'>
          <div className='box1'><h3 className='web'>Web Development</h3><p className='web'>I create responsive static websites using Reactjs.</p></div>
        </div>
      </div>

      <div className='project' id="project">
        <h1 className='pro'>Projects</h1>
        <div className='boxes'>
          <div className='box2'><h4 className='star'>StarBook</h4><p className='star'>A digital diary and mood tracking app that helps you in
            keeping track of your mood and productivity throughout the month/year.</p></div>

          <div className='box2'><h4 className='star'>QuranTalk</h4><p className='star'>An emotional well being and mental health app.
            The app helps people to navigate their emotions in the light of the Quran.</p></div>

          <div className='box2'><h4 className='star'>Portfolio</h4><p className='star'>A portfolio website template that helps you showcase your work,
            projects and skills as a software developer or freelancer.</p></div>
        </div>
      </div>

      <div className='go' id="contact" >
        <h1 className='touch'>Go in touch</h1>
        <p className='para3'>Coffee Chat! Please do not hesitate to schedule a meeting.
          Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.</p>
        <div className='buttons' id="contact1">
          <button className='button1'>Email Me</button>
          <button className='button2' onClick={
            () => {
              const mydiv = document.getElementById("meeting");
              mydiv.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }>Schedule Meeting</button>
        </div>
      </div>
      <div className='footer'>
        <h13>© 2023 Haroonahmed. Open sourced with love under MIT License</h13>
      </div>
    </div>
  )

}

