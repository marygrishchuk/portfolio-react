import React from 'react';
import s from './Projects.module.scss';
import containerStyle from "../../common/styles/Container.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../../common/components/Title/Title";

const Projects = ({projects}) => {
    return (
        <div className={`${s.projects} chapter`} id={"projects"}>
            <Title text={"My Projects"}/>
            <div className={containerStyle.container}>
                {projects.map(p => <Project key={p.id} project={p}/>)}
            </div>
        </div>
    );
}

export default Projects;

