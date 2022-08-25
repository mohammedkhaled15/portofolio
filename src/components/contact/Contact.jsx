import "./contact.css"
import { GrMail } from "react-icons/gr"
import { RiMessengerLine } from "react-icons/ri"
import { ImWhatsapp } from "react-icons/im"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_khws86l", 'template_d7g7t0j', form.current, 'GxKLJlGBuCkDrQy0a')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <GrMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>mkhaled-farag@outlook.com</h5>
                        <a href="mailto:mkhaled-farag@outlook.com" rel="noreferrer" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>MohammedKhaled1590</h5>
                        <a href="https://m.me/Mohammedkhaled1590" rel="noreferrer" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <ImWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>0201069667123</h5>
                        <a href="https://api.whatsapp.com/send?phone=201069667123" rel="noreferrer" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" id="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" id="email" placeholder='Your Email' required />
                    <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact