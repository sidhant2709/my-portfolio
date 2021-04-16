import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import p1 from "../Images/Projects Images/p1.jpg";
import p2 from "../Images/Projects Images/p2.jpg"
import p3 from "../Images/Projects Images/p3.jpg"
import p4 from "../Images/Projects Images/p4.jpg";

const TechnologyCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={2000}
        >
            <div>
                <img src={p1} alt="p1" />
                <div className="myCarousel">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
            <div>
                <img src={p2} alt="p1" />
                <div className="myCarousel">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
            <div>
                <img src={p3} alt="p1" />
                <div className="myCarousel">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
            <div>
                <img src={p4} alt="p1" />
                <div className="myCarousel">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
        </Carousel>
    )
}

export default TechnologyCarousel
