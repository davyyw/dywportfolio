import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import {useState } from 'react';
const ImagesPath = process.env.PUBLIC_URL + '/images/';

function Jsproject(){
  const [lgShow, setLgShow] = useState(false);
  return (
    <section className="cardWrapper">
    <article             
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="700"
      data-aos-once="true">
      <div className="cardImage">
      <img
            src={`${ImagesPath}connectfour.png`}
            alt="connectfour game image"
            />
      </div>
      <div className="cardDescription">
        <h3>Connect Four</h3>
        <h4>Technique Stacks</h4>
        <ul>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <p>A basic Connect Four game with board size selection and countdown timer function. Modal help was also implemented to give instructions to players.</p>
        <a href="https://github.com/davyyw/connect-four">GitHub</a>
        <Link to="" onClick={() => setLgShow(true)}>Learn More</Link>
        <a href="https://dywprojects.ca/connect-four/">LiveSite</a>
      </div>
    </article>
    <article             
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="700"
      data-aos-once="true">
      <div className="cardImage">
      <img
            src={`${ImagesPath}photomemory.png`}
            alt="photomemory game image"
            />
      </div>
      <div className="cardDescription">
        <h3>Photo Memory</h3>
        <h4>Technique Stacks</h4>
        <ul>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <p>A simple game implemented by Javascript and JQuery</p>
        <a href="https://github.com/davyyw/photo-matching">GitHub</a>
        <a href="https://dywprojects.ca/photo-matching/">LiveSite</a>
      </div>
    </article>
    <Modal
        fullscreen='xxl-down'
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="projectsModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Connect Four
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalImageBack">
          <img
            src={`${ImagesPath}jsgamecombined.png`}
            alt="connectfour game image"
          />
          </div>
          <h3>Overview</h3>
          <p>This was the first Javascript project in our intense BCIT study. In order to implement this game, multiple 
            techniques were used. Javascript OOP method was used for main control of the game. JQuery was used for DOM
             control. Bootstrap was used for icons and modals.
          </p>
          <ul>
            <li><strong>Duration:</strong> 1 week</li>
            <li><strong>Team:</strong> Only me</li>
            <li><strong>Roles:</strong> Development</li>
          </ul>
          <h3>Features</h3>
          <section className="modalCard">
            <img
              src={`${ImagesPath}scoreboard.png`}
              alt="connect four game scoreboard"
            />
            <p>
            JQuery DOM manipulation was utilized for implementing an instant display score board.
            </p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}gamemodal.png`}
              alt="connect four game game modal"
            />
            <p>
            Bootstrap library was utilized for displaying modal instructions.
            </p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}countdowntimer.png`}
              alt="connect four game game modal"
            />
            <p>
            setInterval() function was utilized to implement a countdown timer.
            </p>
          </section>
          <h3>Reflection</h3>
          <p>Multiple Javascript techniques were utilized to implement this comprehensive Connect Four game. With all those practices, I got deeper
            understanding of Javascript and JQuery DOM manipulation.
          </p>
        </Modal.Body>
    </Modal>
    </section>
  )
}

export default Jsproject;