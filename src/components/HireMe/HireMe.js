import React from 'react';
import s from './HireMe.module.css';

function HireMe() {
    return (
        <div className={s.hireMe}>
            <h2 className={s.title}>I'd love to take part in your project</h2>
            <a href={"https://www.linkedin.com/in/marygrishchuk/"} target="_blank" rel="noreferrer">
                <button className={s.btn}>HIRE ME</button>
            </a>
        </div>
    );
}

export default HireMe;