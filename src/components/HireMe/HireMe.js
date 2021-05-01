import React from 'react';
import s from './HireMe.module.scss';
import '../../App.scss';
import commonStyle from '../../common/styles/Button.module.scss'

const HireMe = () => {
    return (
        <div className={`${s.hireMe} chapter`}>
            <h4 className={s.title}>I'd love to take part in your project</h4>
            <a className={commonStyle.btn} href={"https://www.linkedin.com/in/marygrishchuk/"} target="_blank" rel="noreferrer">
                Hire Me
            </a>
        </div>
    );
}

export default HireMe;