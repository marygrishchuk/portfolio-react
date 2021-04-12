import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Skills from "./components/Skills/Skills";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <HomePage/>
            <Skills/>
        </div>
    );
}

export default App;
