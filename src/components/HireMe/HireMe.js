import React from 'react';
import s from './HireMe.module.css';
import '../../App.css';

const HireMe = () => {
    return (
        <div className={s.hireMe}>
            <h4 className={s.title}>I'd love to take part in your project</h4>
            <a className={"btn"} href={"https://www.linkedin.com/in/marygrishchuk/"} target="_blank" rel="noreferrer">
                Hire Me
            </a>
        </div>
    );
}

export default HireMe;