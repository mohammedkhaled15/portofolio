import React from 'react'
import "./about.css"
import Me from "./../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderActive } from "react-icons/vsc"

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <div className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience </h5>
                            <small>2+ Years</small>
                        </div>
                        <div className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients </h5>
                            <small>2+ Years</small>
                        </div>
                        <div className="about__card">
                            <VscFolderActive className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ Projects</small>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vel in, totam autem sint voluptate odio repellendus minima maxime possimus quas quae obcaecati! Dolores dolorum saepe consequatur corrupti ipsam totam.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About