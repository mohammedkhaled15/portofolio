import React from 'react'
import Header from "./components/header/Header"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Experience from "./components/experience/Experience"
import Testemonials from "./components/testemonials/Testemonials"
import Services from './components/services/Services'
import Portofolio from "./components/portofolio/Portofolio"


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portofolio />
            {/* <Testemonials /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default App