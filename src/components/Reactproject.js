import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import {useState } from 'react';
const ImagesPath = process.env.PUBLIC_URL + '/images/';

function Reactproject(){
  const [lgShow, setLgShow] = useState(false);
  const [pShow, setPShow] = useState(false);
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
            src={`${ImagesPath}phomepage.png`}
            alt="portfolio image"
      />
      </div>
      <div className="cardDescription">
        <h3>Portfolio</h3>
        <h4>Technique Stacks</h4>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>MUI</li>
          <li>EmailJS</li>
          <li>REST API</li>
          <li>Headless CMS</li>
        </ul>
        <p>A comprehensive project implemented by multiple techniques.</p>
        <a href="https://github.com/davyyw/dywportfolio">GitHub</a>
        <Link to="" onClick={() => setPShow(true)}>Learn More</Link>
        <a href="https://dywprojects.ca/">LiveSite</a>
         </div>
    </article>
    <article       
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="700"
      data-aos-once="true"
    >
      <div className="cardImage">
      <img
            src={`${ImagesPath}moviedb.png`}
            alt="movie databse image"
      />
      </div>
      <div className="cardDescription">
        <h3>Movie Databse</h3>
        <h4>Technique Stacks</h4>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>npm</li>
          <li>SASS</li>
        </ul>
        <p>A dynamic movie database for users to browse, search and bookmark movies.</p>
        <a href="https://github.com/davyyw/movieDB">GitHub</a>
        <Link to="" onClick={() => setLgShow(true)}>Learn More</Link>
        <a href="https://dywprojects.ca/moviedb/">LiveSite</a>
      </div>
    </article>
    <article      
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="700"
      data-aos-once="true"
    >
      <div className="cardImage">
      <img
            src={`${ImagesPath}calculator.png`}
            alt="calculator image"
      />
      </div>
      <div className="cardDescription">
        <h3>Calculator</h3>
        <h4>Technique Stacks</h4>
        <ul>
          <li>React</li>
        </ul>
        <p>A simple calculator implemented by React and useState hooks.</p>
        <a href="https://github.com/davyyw/calculator">GitHub</a>
        <a href="https://dywprojects.ca/calculator/">LiveSite</a>
      </div>
    </article>

    <Modal
        fullscreen='xxl-down'
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        className="projectsModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Movie Database
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalImageBack">
          <img
            src={`${ImagesPath}moviecombined.png`}
            alt="movie database image"
          />
          </div>
          <h3>Overview</h3>
          <p>This is a comprehensive project utilizing the React.JS platform. Various techniques were used on this project, including state and effect hooks, SASS, React Router, Redux etc.
          By using React, a dynamic web page was created and live functions such as searching and adding to favorite.
          </p>
          <ul>
            <li><strong>Duration:</strong> 2 weeks</li>
            <li><strong>Team:</strong> Three People</li>
            <li><strong>My Roles:</strong> React developer</li>
          </ul>
          <h3>Features</h3>
          <section className="modalCard">
            <img
              src={`${ImagesPath}singlemovie.png`}
              alt="movie database single page"
            />
            <p>
              API fetching and async functions are used to get movie information from TMDB. The information included but was not limited to the movie title, length, trailer etc.</p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}moreinfo.png`}
              alt="movie database add to favorite"
            />
            <p>
            Redux local storage was used to implement 'Add to Favorite' function. By clicking the star button, movies can be added or deleted from 'favorite'.
            </p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}moviesearch.png`}
              alt="movie database search function"
            />
            <p>
            Used searching API and ranking API to search movies from TMDB. Users can input their desired movies inside the search bar and get the results. Also, users can choose different ranking orders for the latest movies.
            </p>
          </section>
          <h3>Reflection</h3>
          <p>
            This hands-on practice on React project clarifies the importance of React platform. This platform can implement many dynamic functions conveniently. Many components are wrapped in node package and is ready to use.
            I am also planning to learn another three popular platform - Angular and Vue in the future. Because those three platforms have key importance on web developing field.
          </p>
        </Modal.Body>
      </Modal>

      <Modal
        fullscreen='xxl-down'
        size="xl"
        show={pShow}
        onHide={() => setPShow(false)}
        className="projectsModal">
        <Modal.Header closeButton>
          <Modal.Title>
            Portfolio
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modalImageBack">
          <img
            src={`${ImagesPath}pcombined.png`}
            alt="porfolio image"
          />
          </div>
          <h3>Overview</h3>
          <p>
          This website was a composite of multiple techniques, components, third-party libraries and platforms. By utilizing various tech stacks, I got a deeper understanding of React framework.
          </p>
          <ul>
            <li><strong>Duration:</strong> 2 weeks</li>
            <li><strong>Team:</strong> Only Me</li>
            <li><strong>My Roles:</strong> React developer</li>
          </ul>
          <h3>Features</h3>
          <section className="modalCard">
            <img
              src={`${ImagesPath}pthirdparty.png`}
              alt="portfolio image"
            />
            <p>
            Used various third-party CSS and Javascript libraries to implement visual animation and elements control.
            </p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}paos.png`}
              alt="potfolio image"
            />
            <p>
              Animation of Scroll library was used to implement scrolling animation.
            </p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}pbootstrap.png`}
              alt="potfolio image"
            />
            <p>
              Bootstrap React modal component was used here to build a detailed description page for a single project.
            </p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}pmui.png`}
              alt="potfolio image"
            />
            <p>
              MUI React component was used here to build a rotating carousel.
            </p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}pemailjs.png`}
              alt="potfolio image"
            />
            <p>
              EmailJS component was used here for the contact form. Users can leave their information and message in the form and click submit button to send me an email.
            </p>
          </section>
          <section className="modalCard">
            <img
              src={`${ImagesPath}prestapi.png`}
              alt="potfolio image"
            />
            <p>
              A backend WordPress served as a content managing system to store my technical blogs. REST API was used to fetch blogs and search blogs from Headless WordPress.
            </p>
          </section>

          <h3>Reflection</h3>
          <p>
            This was my graduation project. In this project, I combined all the knowledge I have learned in school plus some research for various React components and libraries. From this project, I solidified my knowledge and gained a deeper understanding of React.
          </p>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Reactproject;