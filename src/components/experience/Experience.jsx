import React from 'react'
import "./experience.css"
import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { AiOutlineHtml5 } from "react-icons/ai"
import { SiCss3 } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"
import { FaSass } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { SiMaterialui } from "react-icons/si"
import { BsDiagram3Fill } from "react-icons/bs"
import { FaGitAlt } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiRedux } from "react-icons/si"
import { SiReactrouter } from "react-icons/si"

import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Experience = () => {
    const [fire, setFire] = useState(false);

    const scrollHeight = () => {
        return window.scrollY >= "1100" ? setFire(true) : ""
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHeight);
        return () => window.removeEventListener("scroll", scrollHeight);
    });

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <section id='experience'>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                pagination={pagination}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="container experience__container">
                <SwiperSlide className="skills">
                    <h2>Core Skills</h2>
                    <div className="skills-rates">
                        <div className="progress">
                            <label>HTML5</label>
                            <div className='progress__icon__wrapper'>
                                <AiOutlineHtml5 className='progress__icon' color='red' />
                            </div>
                            <span style={{ width: `${fire ? "90%" : "0"}` }}></span>
                            {<CountUp end={90} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>CSS3</label>
                            <div className='progress__icon__wrapper'>
                                <SiCss3 className='progress__icon' color='#264de4' />
                            </div>
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>javaScript</label>
                            <div className='progress__icon__wrapper'>
                                <SiJavascript className='progress__icon' color='#f0db4f' />
                            </div>
                            <span style={{ width: `${fire ? "80%" : "0"}` }}></span>
                            {<CountUp end={80} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>ReactJs</label>
                            <div className='progress__icon__wrapper'>
                                <GrReactjs className='progress__icon-react' color='#5CD0EE' />
                            </div>
                            <span style={{ width: `${fire ? "80%" : "0"}` }}></span>
                            {<CountUp end={80} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="skills">
                    <h2>Libraries</h2>
                    <div className="skills-rates">
                        <div className="progress">
                            <label>Sass</label>
                            <div className='progress__icon__wrapper'>
                                <FaSass className='progress__icon' color='#C66394' />
                            </div>
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Bootstrap</label>
                            <div className='progress__icon__wrapper'>
                                <FaBootstrap className='progress__icon' color='#7211EC' />
                            </div>
                            <span style={{ width: `${fire ? "75%" : "0"}` }}></span>
                            {<CountUp end={75} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Tailwind</label>
                            <div className='progress__icon__wrapper'>
                                <SiTailwindcss className='progress__icon ' color='#14B6AE' />
                            </div>
                            <span style={{ width: `${fire ? "65%" : "0"}` }}></span>
                            {<CountUp end={65} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Material UI</label>
                            <div className='progress__icon__wrapper'>
                                <SiMaterialui className='progress__icon ' color='#0079F2' />
                            </div>
                            <span style={{ width: `${fire ? "60%" : "0"}` }}></span>
                            {<CountUp end={60} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="skills">
                    <h2>React Libraries</h2>
                    <div className="skills-rates">
                        <div className="progress">
                            <label>React Hooks</label>
                            <div className='progress__icon__wrapper'>
                                <RiReactjsLine className='progress__icon-react' color='#5CD0EE' />
                            </div>
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Redux</label>
                            <div className='progress__icon__wrapper'>
                                <SiRedux className='progress__icon-react' color='#7046B2' />
                            </div>
                            <span style={{ width: `${fire ? "70%" : "0"}` }}></span>
                            {<CountUp end={70} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Redux-toolkit</label>
                            <div className='progress__icon__wrapper'>
                                <SiRedux className='progress__icon-react' color='#7046B2' />
                            </div>
                            <span style={{ width: `${fire ? "75%" : "0"}` }}></span>
                            {<CountUp end={75} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Router</label>
                            <div className='progress__icon__wrapper'>
                                <SiReactrouter className='progress__icon' color='#C5021A' />
                            </div>
                            <span style={{ width: `${fire ? "80%" : "0"}` }}></span>
                            {<CountUp end={80} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="skills">
                    <h2>Side Skills</h2>
                    <div className="skills-rates">
                        <div className="progress">
                            <label>Problem Solving  </label>
                            <div className='progress__icon__wrapper'>
                                <BsDiagram3Fill className='progress__icon' color='black' />
                            </div>
                            <span style={{ width: `${fire ? "45%" : "0"}` }}></span>
                            {<CountUp end={45} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Git</label>
                            <div className='progress__icon__wrapper'>
                                <FaGitAlt className='progress__icon' color='#E94E31' />
                            </div>
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Experience