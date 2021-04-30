import React from 'react';
import s from './Navbar.module.scss';

function Navbar() {
    return (
        <div className={s.navbar}>
            <a href={`${window.location.origin}#home`}>Home</a>
            <a href={`${window.location.origin}#skills`}>Skills</a>
            <a href={`${window.location.origin}#projects`}>Projects</a>
            <a href={`${window.location.origin}#contact-me`}>Contact Me</a>
        </div>
    );
}

export default Navbar;
