import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import {useState } from 'react';
const ImagesPath = process.env.PUBLIC_URL + '/images/';

function Htmlproject(){
  return (
    <section className="cardWrapper">
    <article
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="700"
        data-aos-once="true"
    >
      <div className="cardImage">
      <img
            src={`${ImagesPath}SASSproject.png`}
            alt="restaurant webpage image"
            />
      </div>
      <div className="cardDescription">
        <h3>SASS Project</h3>
        <h4>Technique Stacks</h4>
        <ul>
          <li>HTML</li>
          <li>SASS</li>
          <li>NPM</li>
          <li>GULP</li>
          <li>Fontawesome</li>
        </ul>
        <p>Used SASS and NPM to create a business webpage. A team of four people shared the work and used Git to version control and merged the final code. My role was using Javascript, JQuery and Fontawesome to manipulate the navbar layout.</p>
        <a href="https://github.com/davyyw/SASS-Project">GitHub</a>
        <a href="https://dywprojects.ca/sassproject/">LiveSite</a>
      </div>
    </article>
    </section>
  )
}

export default Htmlproject;