import s from "./Project.module.css";
import React from "react";
import '../../../App.css';

export const Project = ({project}) => {
    return (
        <div className={s.container}>
            <div className={s.screenshot}>
                <a className={`btn ${s.btn}`} href={project.url} target="_blank" rel="noreferrer">View</a>
                <img src={project.screenshot} alt="a project screenshot"/>
            </div>
            <div className={s.infoBlock}>
                <h6 className={s.projectTitle}>
                    <a href={project.url}>{project.projectTitle}</a>
                </h6>
                <p className={s.description}>{project.description}</p>
            </div>
        </div>
    );
}