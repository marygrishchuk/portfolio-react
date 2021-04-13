import s from "./Project.module.css";
import React from "react";

export const Project = ({project}) => {
    return (
        <div className={s.project}>
            <div className={s.screenshot}>
                <img src={project.screenshot} alt="a project screenshot"/>
                <a href={project.url} target="_blank" rel="noreferrer">
                    <button className={s.btn}>View</button>
                </a>
            </div>
            <h3 className={s.projectTitle}>{project.projectTitle}</h3>
            <div className={s.description}>{project.description}</div>
        </div>
    );
}