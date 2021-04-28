import React from 'react';
import s from './Projects.module.css';
import containerStyle from "../../common/styles/Container.module.css"
import {Project} from "./Project/Project";
import {Title} from "../Title/Title";

const Projects = ({projects}) => {
    return (
        <div className={s.projects} id={"projects"}>
            <Title text={"My Projects"}/>
            <div className={containerStyle.container}>
                {projects.map(p => <Project key={p.id} project={p}/>)}
            </div>
        </div>
    );
}

export default Projects;

