import React from 'react';
import s from './Footer.module.scss';
import codewars from '../../assets/images/codewars.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faAt} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.icons}>
                <a href={"https://github.com/marygrishchuk"} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} inverse size={"lg"}/>
                </a>
                <a href={"https://www.linkedin.com/in/marygrishchuk/"} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} inverse size={"lg"}/>
                </a>
                <a href={"mailto: mary.grishchuk1@gmail.com"} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faAt} inverse size={"lg"}/>
                </a>
                <a href={"https://www.codewars.com/users/marygrishchuk/"} target="_blank" rel="noreferrer">
                    <img src={codewars} alt="codewars" className={s.icon}/>
                </a>
            </div>
            <h5 className={s.title}>Mary Grishchuk</h5>
            <p>© 2021 marygrishchuk, All Rights Reserved.</p>
        </div>
    );
}

export default Footer;