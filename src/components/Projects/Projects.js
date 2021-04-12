import React from 'react';
import s from './Projects.module.css';
import {useSelector} from "react-redux";
import containerStyle from "../../common/styles/Container.module.css"
import {Project} from "./Project/Project";

const Projects = () => {
    let projects = useSelector(state => state.projects.projects);

    return (
        <div className={s.projects}>
            <h2 className={s.title}>My Projects</h2>
            <hr className={s.line}/>
            <div className={containerStyle.container}>
                {projects.map(p => <Project project={p}/>)}
            </div>
        </div>
    );
}

export default Projects;

