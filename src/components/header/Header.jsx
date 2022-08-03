import React from 'react'
import CvBtns from './CvBtns'
import HeaderSocials from './HeaderSocials'

import "./header.css"
import HeroImg from "./../../assets/me.png"

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1>Mohammed Khaled</h1>
                <h5 className='text-light'>FrontEnd Developer</h5>

                <CvBtns />

                <HeaderSocials />

                <div className="hero-img">
                    <img src={HeroImg} alt="me" />
                </div>
            </div>
        </header>
    )
}

export default Header