import React from 'react';
import s from './Title.module.css';


export const Title = ({text}) => {
    return <h3 className={s.title}>{text}</h3>
}