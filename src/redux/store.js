import {combineReducers, createStore} from "redux";
import {skillsReducer} from "./skills-reducer";
import {projectsReducer} from "./projects-reducer";

const rootReducer = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer
})

export const store = createStore(rootReducer);

window.store = store