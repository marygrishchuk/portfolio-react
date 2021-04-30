import React from 'react';
import s from './Footer.module.css';
import codewars from '../../assets/images/codewars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className={s.footer}>
            <h3 className={s.title}>Mary Grishchuk</h3>
            <div className={s.icons}>
                <a href={"https://github.com/marygrishchuk"} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} inverse size={"3x"}/>
                </a>
                <a href={"https://www.linkedin.com/in/marygrishchuk/"} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} inverse size={"3x"}/>
                </a>
                <a href={"mailto: mary.grishchuk1@gmail.com"} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faAt} inverse size={"3x"}/>
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