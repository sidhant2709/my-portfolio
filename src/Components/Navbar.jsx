/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../Images/logo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">projects</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link" href="#">contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
