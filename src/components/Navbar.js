import React from 'react';
import myLogo from '../images/logo.jpeg';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md  navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link smooth={true} to='home' className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="logo" /></Link>
                <button className="navbar-toggler collapsed d-flex d-md-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link smooth={true} to="home" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-90} className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="skills" offset={-90} className="nav-link" href="#">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-90} className="nav-link" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="resume-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1h_UVTRGosb6egxvtiZtZC-xlVs0EqykF/view?usp=sharing">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;