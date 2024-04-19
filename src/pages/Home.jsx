import React from "react";
// Sections
import Header from "../components/Sections/Home/header";
import OurService from "../components/Sections/Home/OurService";
import AboutUs from "../components/Sections/Home/AboutUs";
import Pricing from "../components/Sections/Home/Pricing/Pricing";
import Projects from "../components/Sections/Home/projects/Projects";
import Contact from "../components/Sections/Home/Contact/Contact";
import Navbar from "../components/Nav/Navbar";

const Home = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <OurService/>
            <Pricing/>
            <Projects/>
            <AboutUs/>
            <Contact/>
        </>
    )
}
export default Home