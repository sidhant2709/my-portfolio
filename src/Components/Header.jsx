/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello, I'm SIDHANT KUMAR SAHOO</h1>
                <Typed
                    className="typed-text"
                    strings={["I am a Full Stack Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
