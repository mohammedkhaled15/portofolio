import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/mohammed-khaled-farag/"><BsLinkedin /></a>
            <a href="https://github.com/mohammedkhaled15"><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials