import React from 'react';
import s from './Navbar.module.scss';

function Navbar() {
    return (
        <div className={s.navbar}>
            <a href={`#home`}>Home</a>
            <a href={`#skills`}>Skills</a>
            <a href={`#projects`}>Projects</a>
            <a href={`#contact-me`}>Contact Me</a>
        </div>
    );
}

export default Navbar;
