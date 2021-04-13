import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import HireMe from "./components/HireMe/HireMe";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <HomePage/>
            <Skills/>
            <Projects/>
            <HireMe/>
            <ContactMe/>
        </div>
    );
}

export default App;
