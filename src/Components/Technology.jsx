import React from 'react'
import TechnologyCarousel from './TechnologyCarousel'

const Technology = () => {
    return (
        <div className="technologies">
            <h1>Technology I use</h1>
            <div className="container">
                <div className="technologies-content">
                    <TechnologyCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Technology
