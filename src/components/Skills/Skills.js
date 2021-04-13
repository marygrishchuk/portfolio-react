import React from 'react';
import style from './Skills.module.css';
import {useSelector} from "react-redux";
import containerStyle from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";

const Skills = () => {
    let skills = useSelector(state => state.skills.skills);

    return (
        <div className={style.skills} id={"skills"}>
            <h2 className={style.title}>My Skills</h2>
            <hr className={style.line}/>
            <div className={containerStyle.container}>
                {skills.map(s => <Skill key={s.id} skill={s}/>)}
            </div>
        </div>
    );
}

export default Skills;

