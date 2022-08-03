import React from 'react'
import CV from "./../../assets/Mohammed-Khaled-CV.pdf"

const CvBtns = () => {
    return (
        <div className='cv'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CvBtns