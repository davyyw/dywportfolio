import { NavLink, Outlet} from 'react-router-dom';
import { useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
const ImagesPath = process.env.PUBLIC_URL + '/images/';

function Projects(){
  useEffect(() => {
    document.title = `DYW-Projects`;
  }, []);
  return (
  <>
  <img             
  data-aos="fade-up"
  data-aos-delay="500"
  data-aos-duration="1000"
  data-aos-once="true"
  className="projectsBackImage" src={`${ImagesPath}sky.jpg`} alt="Sky image" />
  <nav 
  data-aos="fade-up"
  data-aos-delay="500"
  data-aos-duration="1000"
  data-aos-once="true"
  className="nav-sort-desktop">
    <ul>
      <li>
          <NavLink to='jsproject'>JavaScript</NavLink>
      </li>
      <li>
          <NavLink to='htmlproject'>HTML</NavLink>
      </li>
      <li>
          <NavLink to='wordproject'>WordPress</NavLink>
      </li>
      <li>
          <NavLink to='reactproject'>React.JS</NavLink>
      </li>
    </ul>
  </nav>
  <Outlet />
  </>
  )
}

export default Projects;