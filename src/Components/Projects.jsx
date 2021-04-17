/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import p1 from "../Images/Projects Images/p1.jpg";
import p2 from "../Images/Projects Images/p2.jpg"
import p3 from "../Images/Projects Images/p3.jpg"
import p4 from "../Images/Projects Images/p4.jpg";
import cssIcon from "../Images/Icon Images/css.svg";
import jsIcon from "../Images/Icon Images/js.svg"
import reactIcon from "../Images/Icon Images/react.svg"
import htmlIcon from "../Images/Icon Images/html.svg";
import { FaSearchPlus } from 'react-icons/fa';

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
    const openProjectAlzajeera = () => {
        const content = (
            <div className="popup-box">
                <img src={p1} alt="p1" className="portfolio-image-popupbox"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae temporibus deserunt eius autem corporis eveniet consequatur, mollitia accusantium quam quos omnis nulla quas impedit.</p>
                <div className="link-button">
                    <button onClick={() => window.open("https://github.com/rohanranjan25061996/hexane-aljeera-clone")} className="github">GitHub Link</button>
                    <button className="demo">DEMO</button>
                </div>
                <h3>Technologies used</h3>
                <div className="technology-used">
                    <img src={cssIcon} alt="cssIcon" className="tech-icon"/>
                    <img src={jsIcon} alt="cssIcon" className="tech-icon" />
                    <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
                    <img src={reactIcon} alt="cssIcon" className="tech-icon"/>
                </div>
            </div>
        )
        PopupboxManager.open({ content });
    }
   const openP2 = () => {
        const content = (
            <div className="popup-box">
                <img src={p2} alt="p2" className="portfolio-image-popupbox"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae temporibus deserunt eius autem corporis eveniet consequatur, mollitia accusantium quam quos omnis nulla quas impedit.</p>
                <div className="link-button">
                    <button onClick={() => window.open("https://github.com/rohanranjan25061996/hexane-aljeera-clone")} className="github">GitHub Link</button>
                    <button className="demo">DEMO</button>
                </div>
                <h3>Technologies used</h3>
                <div className="technology-used">
                    <img src={cssIcon} alt="cssIcon" className="tech-icon"/>
                    <img src={jsIcon} alt="cssIcon" className="tech-icon" />
                    <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
                    <img src={reactIcon} alt="cssIcon" className="tech-icon"/>
                </div>
            </div>
        )
        PopupboxManager.open({content})
    }

    const openP3 = () => {
        const content = (
            <div className="popup-box">
                <img src={p1} alt="p1" className="portfolio-image-popupbox"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae temporibus deserunt eius autem corporis eveniet consequatur, mollitia accusantium quam quos omnis nulla quas impedit.</p>
                <div className="link-button">
                    <button onClick={() => window.open("https://github.com/rohanranjan25061996/hexane-aljeera-clone")} className="github">GitHub Link</button>
                    <button className="demo">DEMO</button>
                </div>
                <h3>Technologies used</h3>
                <div className="technology-used">
                    <img src={cssIcon} alt="cssIcon" className="tech-icon"/>
                    <img src={jsIcon} alt="cssIcon" className="tech-icon" />
                    <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
                    <img src={reactIcon} alt="cssIcon" className="tech-icon"/>
                </div>
            </div>
        )
        PopupboxManager.open({content})
    }
    const openP4 = () => {
        const content = (
            <div className="popup-box">
                <img src={p1} alt="p1" className="portfolio-image-popupbox"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae temporibus deserunt eius autem corporis eveniet consequatur, mollitia accusantium quam quos omnis nulla quas impedit.</p>
                <div className="link-button">
                    <button onClick={() => window.open("https://github.com/rohanranjan25061996/hexane-aljeera-clone")} className="github">GitHub Link</button>
                    <button className="demo">DEMO</button>
                </div>
                <h3>Technologies used</h3>
                <div className="technology-used">
                    <img src={cssIcon} alt="cssIcon" className="tech-icon"/>
                    <img src={jsIcon} alt="cssIcon" className="tech-icon" />
                    <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
                    <img src={reactIcon} alt="cssIcon" className="tech-icon"/>
                </div>
            </div>
        )
        PopupboxManager.open({content})
    }
    return (
        <div id="projects" className="portfolio-wrapper">
            <h1 className="text-uppercase text-center heading">Projects</h1>
            <div className="container-fluid box">
                <div className="image-box-wrapper row justify-content-center">


                    <div className="portfolio-image-box" onClick={openProjectAlzajeera}>
                        <img src={p1} className="portfolio-image" alt="p1" />
                        <div className="overflow"></div>
                        <FaSearchPlus className="portfolio-icon"/>
                    </div>
                
{/* ====================================================================================================== */}
                
                    <div className="portfolio-image-box" onClick={openP2}>
                        <img src={p2} className="portfolio-image" alt="p2" />
                        <div className="overflow"></div>
                        <FaSearchPlus className="portfolio-icon"/>
                    </div>
                
{/* ====================================================================================================== */}
                
                    <div className="portfolio-image-box" onClick={openP3}>
                        <img src={p3} className="portfolio-image" alt="p3" />
                        <div className="overflow"></div>
                        <FaSearchPlus className="portfolio-icon"/>
                    </div>
                
{/* ====================================================================================================== */}
                
                   <div className="portfolio-image-box" onClick={openP4}>
                        <img src={p4} className="portfolio-image" alt="p4" />
                        <div className="overflow"></div>
                        <FaSearchPlus className="portfolio-icon"/>
                    </div>
                </div>
            </div>
            <PopupboxContainer/>
        </div>
    )
}

export default Projects
