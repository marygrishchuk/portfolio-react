import s from "./Project.module.scss";
import React from "react";
import '../../../App.scss';
import commonStyle from '../../../common/styles/Button.module.scss'

export const Project = ({project}) => {
    const divStyle = {
        backgroundImage: `url(${project.screenshot})`
    }

    return (
        <div className={s.container}>
            <div className={s.screenshot} style={divStyle}>
                <a className={`${commonStyle.btn} ${s.btn}`} href={project.url} target="_blank" rel="noreferrer">View</a>
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