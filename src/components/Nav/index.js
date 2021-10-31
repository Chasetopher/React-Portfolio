import React from 'react'
import logo from '../../assets/images/logo.png';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home"><img src={logo} alt="logo" /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white nav-font" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white nav-font" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white nav-font" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white nav-font" href="#resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
