import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import HireMe from "./components/HireMe/HireMe";
import Footer from "./components/Footer/Footer";
import {useSelector} from "react-redux";

const App = () => {

    let state = useSelector(state => state)

    return (
        <div className="App">
            <Header/>
            <HomePage/>
            <Skills skills={state.skills.skills}/>
            <Projects projects={state.projects.projects}/>
            <HireMe/>
            <ContactMe contactFormData={state.contactForm}/>
            <Footer/>
        </div>
    );
}

export default App;
