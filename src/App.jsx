import React from 'react'
import Header from "./components/header/Header"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Experience from "./components/experience/Experience"
import Testemonials from "./components/testemonials/Testemonials"

const App = () => {
    return (
        <>
            <Header />
            <About />
            <Nav />
            <Experience />
            <Testemonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App