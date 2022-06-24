import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const ImagesPath = process.env.PUBLIC_URL + '/images/';

function Header(){

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 0);
    }

    function afterClick(e){
        e.prevenDefault();
        document.getElementsByClassName("navbar-collapse")[0].classList.remove("show");
    }

    return (
        <header className="main-header"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-once="true">

            <div className="header-upper">
                <div className="container clearfix">
                    <div className="header-inner">
                        <div className="logo-outer">
                            <div className="logo"><Link className="personalLogo" onClick={ refreshPage } to={`/`}><img src={`${ImagesPath}logo.svg`} alt="Logo" /></Link></div>
                        </div>
                        <div className="nav-outer clearfix">
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header clearfix">
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix">
                                    <ul className="navigation clearfix">
                                        <li><NavLink onClick={afterClick} to="/">Home</NavLink></li>
                                        <li><NavLink onClick={afterClick} to="/projects">Projects</NavLink></li>
                                        <li><NavLink onClick={afterClick} to="/contact">Contact</NavLink></li>
                                        <li><NavLink onClick={afterClick} to="/blog">Blog</NavLink></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;