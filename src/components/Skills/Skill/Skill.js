import s from "./Skill.module.scss";
import React from "react";

export const Skill = ({skill}) => {
    return (
        <div className={s.skill}>
            <div className={s.logo}>
                <div style={{backgroundImage: `url(${skill.logo})`}}>
                </div>
            </div>
            <div className={s.skillInfo}>
                <h5 className={s.skillTitle}>{skill.skillTitle}</h5>
                <p className={s.description}>{skill.description}</p>
            </div>
        </div>
    );
}