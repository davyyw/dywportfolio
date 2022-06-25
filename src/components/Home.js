import Carousel from 'react-bootstrap/Carousel';
import { useEffect} from 'react';
import Weather from "./Weather";
const ImagesPath = process.env.PUBLIC_URL + '/images/';

function Home(){
    useEffect(() => {
        document.title = `DYW-Home`;
      }, []);
    
    return(
    <>
        <Carousel        
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-once="true">
        <Carousel.Item interval={5000} className="firstCarousel">
            <img
            className="d-block w-100"
            src={`${ImagesPath}daisy.jpg`}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 data-text="Davy Yue Wang">
                Davy Yue Wang
            </h3>
            <p data-text="Front-web-developer">Front-web-developer</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="secondCarousel">
            <img
            className="d-block w-100"
            src={`${ImagesPath}tree.jpg`}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3 className="messageTitle">Always Be:</h3>
            <h3 className="messageHeading">
            <div className="message">
                <div className="word1">Creating</div>
                <div className="word2">Enthusiastic</div>
                <div className="word3">Intelligent</div>
            </div>
            </h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="thirdCarousel">
            <img
            className="d-block w-100"
            src={`${ImagesPath}water.jpg`}
            alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Love to</h3>
                <br/>
                <p className="scroller"><span>
                Code<br/>
                Think<br/>
                Solve<br/>
                Challenge</span></p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

        <section className="widget-section"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-once="true"
        >
            <Weather/>
        </section>

        <section             
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-once="true"
        className="resume-section">
            <div className="resume-top">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-5">
                        <div className="resume-top-image"
                        style={{ 
                            backgroundImage: `url(${ImagesPath}handshake.jpg)` ,
                        }}></div>
                    </div>
                    <div className="col-xl-5 col-lg-7">
                        <div className="section-heading">
                            <h2>Past Work Experience</h2>
                            <p>Below are my past work experience. I have learnt a lot from those invaluable experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume-content-area">
                <div className="resume-inner-content">
                    <div className="nav flex-column nav-pills" id="resume-tabs" role="tablist" aria-orientation="vertical">
                        <div className="nav-link" id="resume-tab-one" data-bs-toggle="pill" data-bs-target="#tab-one" role="tab" aria-controls="tab-one" aria-selected="true">
                            <h5>01.</h5>
                            <p>2019-2020</p>
                        </div>
                        <div className="nav-link active" id="resume-tab-two" data-bs-toggle="pill" data-bs-target="#tab-two" role="tab" aria-controls="tab-two" aria-selected="false">
                            <h5>02.</h5>
                            <p>2020-2021</p>
                        </div>
                        <div className="nav-link" id="resume-tab-three" data-bs-toggle="pill" data-bs-target="#tab-three" role="tab" aria-controls="tab-three" aria-selected="false">
                            <h5>03.</h5>
                            <p>2021-2022</p>
                        </div>
                    </div>
                    <div className="tab-content" id="resume-tabsContent">
                        <div className="tab-pane fade" id="tab-one" role="tabpanel" aria-labelledby="resume-tab-one">
                            <div className="inner-content-wrap">
                                <div className="tab-inner-content">
                                    <h5>Worked on PapaJohn's Pizza</h5>
                                    <p>Worked as a manager in PapaJohn's Pizza Chainstore, Surrey, BC. The main responsibility included but was not limited to picking up customers' phone calls, taking walk-in customers' orders, cooking pizza and ordering new stock, etc.<br/>
                                    Developed communication skills with customers and time-management skills in a fast-paced working environment.
                                    </p>
                                </div>
                                <div className="tab-inner-image" style={{backgroundImage: `url(${ImagesPath}pizza.jpg)`,}}></div>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="tab-two" role="tabpanel" aria-labelledby="resume-tab-two">
                            <div className="inner-content-wrap">
                                <div className="tab-inner-content">
                                    <h5>Worked on Xpress Lube</h5>
                                    <p>Worked as a lube technician. Was responsible for checking spare parts, inspecting cars' mechanic conditions, draining stale oil and refilling new oil.<br/>Developed a very fast working manners and attentive working attitude.</p>
                                </div>
                                <div className="tab-inner-image" style={{backgroundImage: `url(${ImagesPath}oil.jpg)`,}}></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="resume-tab-three">
                            <div className="inner-content-wrap">
                                <div className="tab-inner-content">
                                    <h5>Studied in BCIT</h5>
                                    <p>Studied in Front-Web-Developer program. Grasped a solid foundation of HTML, CSS, JavaScript, React.JS and WordPress. Now am looking forward to welcoming any challenge.</p>
                                </div>
                                <div className="tab-inner-image" style={{backgroundImage: `url(${ImagesPath}htmlcode.jpg)`,}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="skills-section"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-once="true">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-heading">
                            <h2>Skill Sets</h2>
                        </div>
                    </div>
                </div>
                <div className="skills-area">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="skills develop-skill">
                                <h4>Develop Skill</h4>
                                <div className="skill-bars">
                                    <div className="skillbar" data-percent="70">
                                        <span className="skillbar-title">WordPress</span>
                                        <span className="skill-bar-percent"></span>
                                        <span className="skillbar-bar"></span>
                                    </div>
                                    <div className="skillbar" data-percent="75">
                                        <span className="skillbar-title">PHP</span>
                                        <span className="skill-bar-percent"></span>
                                        <span className="skillbar-bar"></span>
                                    </div>
                                    <div className="skillbar" data-percent="80">
                                        <span className="skillbar-title">HTML5</span>
                                        <span className="skill-bar-percent"></span>
                                        <span className="skillbar-bar"></span>
                                    </div>
                                    <div className="skillbar" data-percent="75">
                                        <span className="skillbar-title">Javascript</span>
                                        <span className="skill-bar-percent"></span>
                                        <span className="skillbar-bar"></span>
                                    </div>
                                    <div className="skillbar" data-percent="70">
                                        <span className="skillbar-title">React</span>
                                        <span className="skill-bar-percent"></span>
                                        <span className="skillbar-bar"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skills design-skill">
                                <h4>Design Skill</h4>
                                <div className="circle-skills">
                                    <div className="circle-skill">
                                        <div className="circle-skill-percent">
                                            <b>0</b>
                                        </div>
                                        <span className="circle-skill-title">Photoshop</span>
                                    </div>
                                    <div className="circle-skill two">
                                        <div className="circle-skill-percent">
                                            <b>0</b>
                                        </div>
                                        <span className="circle-skill-title">Illustrator</span>
                                    </div>
                                    <div className="circle-skill three">
                                        <div className="circle-skill-percent">
                                            <b>0</b>
                                        </div>
                                        <span className="circle-skill-title">UI/UX Thinking</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
    )
}

export default Home;