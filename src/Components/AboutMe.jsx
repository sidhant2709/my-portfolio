import React from 'react'
import MyImage from "../Images/Sid.jpg"
const AboutMe = () => {
    return (
        <section id="about" className="container-fluid about-me">
            <div className="container py-5 cont-h about-me-border">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-5">
                            <img src={MyImage} alt="Sidhant" className="profile-img"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-header">About Me</h1>
                        <p className="about-paragraph">
                            I am Sidhant Kumar Sahoo. I am from Bhubaneswar, Odisha. I completed my 10+2 from Mother’s Public School Bhubaneswar and did my graduation in Electrical Engineering from C.V. Raman College of Engineering Bhubaneswar.
                            I used to work in Cognizant Technology Solutions, Kolkata as developer but due to some personal reason I had to quit. After that I worked as a Marketing Head for CIMS Bhubaneswar in March of 2020 I lost my job due to COVID. In Nov-2020 I started working as a Transportation Specialist in Amazon-ROC Hyderabad and simultaneously learning to be a Full Stack Developer in Masai School.
                        </p>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default AboutMe
