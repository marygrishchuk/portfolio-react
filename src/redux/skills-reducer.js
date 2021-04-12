import js from "../assets/images/js.png"
import ts from "../assets/images/ts.png"
import react from "../assets/images/react.svg"
import redux from "../assets/images/redux.png"
import html from "../assets/images/html.jpg"
import css from "../assets/images/css.svg"

let initialState = {
    skills: [{
        skillTitle: "JavaScript", description: "The detailed description of the skill...", logo: js
    }, {
        skillTitle: "TypeScript", description: "The detailed description of the skill...", logo: ts
    }, {
        skillTitle: "React", description: "The detailed description of the skill...", logo: react
    }, {
        skillTitle: "Redux", description: "The detailed description of the skill...", logo: redux
    }, {
        skillTitle: "HTML", description: "The detailed description of the skill...", logo: html
    }, {
        skillTitle: "CSS", description: "The detailed description of the skill...", logo: css
    }]
}

export const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}