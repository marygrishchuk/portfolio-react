import React from 'react';
import s from './Footer.module.css';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import email from '../../assets/images/email.png';
import codewars from '../../assets/images/codewars.svg';


function Footer() {
    return (
        <div className={s.footer}>
            <h3 className={s.title}>Mary Grishchuk</h3>
            <div className={s.icons}>
                <a href={"https://github.com/marygrishchuk"} target="_blank" rel="noreferrer">
                    <img src={github} alt="github" className={s.icon}/>
                </a>
                <a href={"https://www.linkedin.com/in/marygrishchuk/"} target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" className={s.icon}/>
                </a>
                <a href={"mailto: mary.grishchuk1@gmail.com"} target="_blank" rel="noreferrer">
                    <img src={email} alt="email" className={s.icon}/>
                </a>
                <a href={"https://www.codewars.com/users/marygrishchuk/"} target="_blank" rel="noreferrer">
                    <img src={codewars} alt="codewars" className={s.icon}/>
                </a>
            </div>
            <div className={s.copyright}>© 2021 marygrishchuk, All Rights Reserved.</div>
        </div>
    );
}

export default Footer;