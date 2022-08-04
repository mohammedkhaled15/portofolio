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

const Experience = () => {
    const [fire, setFire] = useState(false);

    const scrollHeight = () => {
        return window.scrollY >= "1100" ? setFire(true) : ""
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHeight);
        return () => window.removeEventListener("scroll", scrollHeight);
    });

    return (
        <section id='experience'>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="skills">
                    <h2>Core Skills</h2>
                    <div className="skills-rates">
                        <div className="progress">
                            <label>HTML5</label>
                            <AiOutlineHtml5 className='progress__icon' color='red' />
                            <span style={{ width: `${fire ? "90%" : "0"}` }}></span>
                            {<CountUp end={90} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>CSS3</label>
                            <SiCss3 className='progress__icon' color='#264de4' />
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>javaScript</label>
                            <SiJavascript className='progress__icon' color='#f0db4f' />
                            <span style={{ width: `${fire ? "80%" : "0"}` }}></span>
                            {<CountUp end={80} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>ReactJs</label>
                            <GrReactjs className='progress__icon-react' color='#5CD0EE' />
                            <span style={{ width: `${fire ? "80%" : "0"}` }}></span>
                            {<CountUp end={80} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>Libraries</h2>
                    <div className="skills-rates">
                        <div className="progress">
                            <label>Sass</label>
                            <FaSass className='progress__icon' color='#C66394' />
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Bootstrap</label>
                            <FaBootstrap className='progress__icon' color='#7211EC' />
                            <span style={{ width: `${fire ? "75%" : "0"}` }}></span>
                            {<CountUp end={75} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Tailwind</label>
                            <SiTailwindcss className='progress__icon ' color='#14B6AE' />
                            <span style={{ width: `${fire ? "65%" : "0"}` }}></span>
                            {<CountUp end={65} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Material UI</label>
                            <SiMaterialui className='progress__icon ' color='#0079F2' />
                            <span style={{ width: `${fire ? "60%" : "0"}` }}></span>
                            {<CountUp end={60} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>React Libraries</h2>
                    <div className="skills-rates">
                        <div className="progress">
                            <label>React Hooks</label>
                            <RiReactjsLine className='progress__icon-react' color='#5CD0EE' />
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Redux</label>
                            <SiRedux className='progress__icon-react' color='#7046B2' />
                            <span style={{ width: `${fire ? "70%" : "0"}` }}></span>
                            {<CountUp end={70} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Router</label>
                            <SiReactrouter className='progress__icon' color='#C5021A' />
                            <span style={{ width: `${fire ? "80%" : "0"}` }}></span>
                            {<CountUp end={80} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>Side Skills</h2>
                    <div className="skills-rates">
                        <div className="progress">
                            <label>Problem Solving  </label>
                            <BsDiagram3Fill className='progress__icon' color='black' />
                            <span style={{ width: `${fire ? "45%" : "0"}` }}></span>
                            {<CountUp end={45} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>Git</label>
                            <FaGitAlt className='progress__icon' color='#E94E31' />
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={fire} duration={1.5} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience