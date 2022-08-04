import React from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { MdWorkOutline } from "react-icons/md"
import { MdMiscellaneousServices } from "react-icons/md"
import { AiOutlineContacts } from "react-icons/ai"
import { useState } from 'react'
const Nav = () => {
    const [activeNav, setActiveNav] = useState("#home")
    return (
        <nav>
            <a href="#home" className={activeNav === "#home" ? "active" : ""} onClick={() => setActiveNav("#home")}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><MdWorkOutline /></a>
            <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><MdMiscellaneousServices /></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineContacts /></a>
        </nav>
    )
}

export default Nav