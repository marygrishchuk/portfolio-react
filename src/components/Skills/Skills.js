import React from 'react';
import s from './Skills.module.css';
import {useSelector} from "react-redux";
import containerStyle from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";

const Skills = () => {
    let skills = useSelector(state => state.skills.skills);

    return (
        <div className={s.skills}>
            <h2 className={s.title}>My Skills</h2>
            <hr className={s.line}/>
            <div className={containerStyle.container}>
                {skills.map(s => <Skill skill={s}/>)}
            </div>
        </div>
    );
}

export default Skills;

