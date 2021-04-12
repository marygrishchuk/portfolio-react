import {combineReducers, createStore} from "redux";
import {skillsReducer} from "./skills-reducer";

const rootReducer = combineReducers({
    skills: skillsReducer,
})

export const store = createStore(rootReducer);

window.store = store