import s from "./Skill.module.css";
import React from "react";

export const Skill = ({skill}) => {
    return (
        <div className={s.skill}>
            <div className={s.logo}>
                <div style={{backgroundImage: `url(${skill.logo})`}}>
                </div>
            </div>
            <h3 className={s.skillTitle}>{skill.skillTitle}</h3>
            <div className={s.description}>{skill.description}</div>
        </div>
    );
}