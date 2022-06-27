import {Link} from 'react-router-dom';
import {useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'
const ImagesPath = process.env.PUBLIC_URL + '/images/';


function Contact(){
  useEffect(() => {
    document.title = `DYW-Contact`;
  }, []);

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Davy',
    message: '',
    reply_to: '',
  });

  const [show, setShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_790f6ph',
      'template_gp5zisf',
      toSend,
      'zxqappilRYQt1szYd'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      // document.getElementById('contactPageForm').reset();
      e.target.reset();
      setShow(true);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactPage">
      <img             
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-once="true"
        className="contactBackImage" src={`${ImagesPath}handshake.jpg`} alt="Sky image"
      />
      <div 
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-once="true"
      className="contactHeading">
        <h1>Contact Me</h1>
      </div>
      <img          
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-once="true"
        className="handWritting" src={`${ImagesPath}contactme.png`} alt="Sky image"
      />
      <form 
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-once="true"
      id="contactPageForm" onSubmit={onSubmit}>
        <input
          className="contactNameArea"
          type='text'
          name='from_name'
          placeholder='Your name'
          onChange={handleChange}
        />
        <input
        className="contactEmailArea"
          type='text'
          name='reply_to'
          placeholder='Your email'
          onChange={handleChange}
        />
        <textarea
          className="contactMessageArea"
          type='text'
          name='message'
          placeholder='Your message'
          onChange={handleChange}
        ></textarea>
        <div className="buttonGroup">
          <button className="contactSubmit" type='submit'>Submit</button>
          <a href="https://www.linkedin.com/in/davyyw/" target="_blank"><img src={`${ImagesPath}linkedin.svg`} alt="linedin image" /></a>
          <a href="https://www.github.com/davyyw" target="_blank"><img src={`${ImagesPath}github.svg`} alt="github image" /></a>
        </div>
      </form>
      {
      show && <Alert 
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-once="true"
      variant="success" transition="true" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Messeage sent successfully.</Alert.Heading>
        <p>
          Thanks for your message. Your message has already been sent to my email and I will check your message instantly.
        </p>
      </Alert>
      }
    </div>
  )
}

export default Contact;
