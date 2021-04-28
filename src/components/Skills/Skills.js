import React from 'react';
import style from './Skills.module.css';
import containerStyle from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../Title/Title";

const Skills = ({skills}) => {
    return (
        <div className={style.skills} id={"skills"}>
            <Title text={"My Skills"}/>
            <div className={containerStyle.container}>
                {skills.map(s => <Skill key={s.id} skill={s}/>)}
            </div>
        </div>
    );
}

export default Skills;

