import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <div className={s.navbar}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default Navbar;