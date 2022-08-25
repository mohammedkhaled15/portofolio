import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi"

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <div className="service">
                    <div className="service__head">
                        <h3>Front-end Developing</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon' />
                            <p>Optimizing the user experience.</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Developing and maintaining the user interface.</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Implementing design on mobile websites.</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Creating tools that improve site interaction regardless of the browser.</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Following SEO best practices.</p>
                        </li>
                    </ul>
                </div>
                {/* <div className="service">
                    <div className="service__head">
                        <h3>Mobile-first or responsive design</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                    </ul>
                </div>
                <div className="service">
                    <div className="service__head">
                        <h3>UI/UX</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                        <li><BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum labore enim nobis necessitatibus</p>
                        </li>
                    </ul>
                </div> */}
            </div>
        </section>
    )
}

export default Services