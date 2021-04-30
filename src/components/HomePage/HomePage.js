import React from 'react';
import s from './HomePage.module.scss';
import photo from '../../assets/images/photo.jpg'

function HomePage() {
    return (
        <div className={`${s.homePage} chapter`} id={"home"}>
            <div className={s.text}>
                <h6>Hi There! I'm</h6>
                <h1>Mary Grishchuk</h1>
                <h2>A Front-end Developer.</h2>
            </div>
            <div className={s.photo}><img src={photo} alt="avatar"/></div>
        </div>
    );
}

export default HomePage;