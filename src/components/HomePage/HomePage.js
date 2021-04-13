import React from 'react';
import s from './HomePage.module.css';
import photo from '../../assets/images/photo.jpg'

function HomePage() {
    return (
        <div className={s.homePage} id={"home"}>
            <div className={s.text}>
                <span>Hi there!</span>
                <h1>I am Mary Grishchuk</h1>
                <p>A Front-end Developer.</p>
            </div>
            <div className={s.photo}><img src={photo} alt="avatar"/></div>
        </div>
    );
}

export default HomePage;