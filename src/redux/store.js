import {applyMiddleware, combineReducers, createStore} from "redux";
import {skillsReducer} from "./skills-reducer";
import {projectsReducer} from "./projects-reducer";
import {contactFormReducer} from "./contact-form-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer,
    contactForm: contactFormReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store