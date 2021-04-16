/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 address">
                        <div className="d-flex">
                            <FaLocationArrow style={{color: "white", fontSize: "1rem",marginTop:"1rem",marginRight:"1rem"}}/>
                            <p style={{ color: "white", fontSize: "1rem" }}>Matru Nilaya,Plot-No.-1439-1440,<br />
                                New Forest Park,Bhubaneswar,<br/>Odisha,India<br/>PIN-75100p
                            </p>
                        </div>
                        <div className="d-flex">
                            <FaPhone style={{color: "white", fontSize: "1rem",marginTop:"0.2rem",marginRight:"1rem"}}/>
                            <p style={{color: "white", fontSize: "1rem"}}>+91-9438731621</p>
                        </div>
                        <div className="d-flex">
                            <MdEmail style={{color: "white", fontSize: "1.5rem",marginTop:"0.2rem",marginRight:"1rem"}}/>
                            <p style={{color: "white", fontSize: "1rem"}}>sidhant1593@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row gap">
                            <div className="col link-to">
                                <a href="" className="footer-nav">Home</a>
                                <br/>
                                <a href="" className="footer-nav">About</a>
                                <br/>
                                <a href="" className="footer-nav">Blogs</a>
                            </div>
                             <div className="col link-to">
                                <a href="" className="footer-nav">Experience</a>
                                <br/>
                                <a href="" className="footer-nav">Projects</a>
                                <br/>
                                <a href="" className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com/sidhant.sahoo.270992"}
                                quote={"Full Stack Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton>
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <LinkedinShareButton>
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
