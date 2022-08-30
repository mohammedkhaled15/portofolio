import React from 'react'
import "./footer.css"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { SiUpwork } from "react-icons/si"
import { SiLeetcode } from "react-icons/si"
import { BsGithub } from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Mohammed khaled</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
                {/* <li><a href="#testemonials">Testemonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/Mohammedkhaled1590"><AiFillFacebook className='footer__socials-icon' /></a>
                <a href="https://www.linkedin.com/in/mohammed-khaled-farag/"><AiFillLinkedin className='footer__socials-icon' /></a>
                <a href="https://www.instagram.com/mohammedkhaled1590/"><AiFillInstagram className='footer__socials-icon' /></a>
                <a href="https://twitter.com/M_Kh1590"><AiOutlineTwitter className='footer__socials-icon' /></a>
                <a href="https://www.upwork.com/freelancers/~01402b578c96d22843"><SiUpwork className='footer__socials-icon' /></a>
                <a href="https://leetcode.com/mohammedkhaled15/"><SiLeetcode className='footer__socials-icon' /></a>
                <a href="https://github.com/mohammedkhaled15"><BsGithub className='footer__socials-icon' /></a>
            </div>
            <div className="footer__copyright"><small>&copy; MADE WITH <span>&#9829;</span> BY MOHAMMED KHALED</small></div>
        </footer>
    )
}

export default Footer