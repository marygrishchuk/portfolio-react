import js from "../assets/images/js.png"
import ts from "../assets/images/ts.png"
import react from "../assets/images/react.svg"
import redux from "../assets/images/redux.png"
import html from "../assets/images/html.jpg"
import css from "../assets/images/css.svg"

let initialState = {
    skills: [{
        id: "005", skillTitle: "JavaScript", description: "The detailed description of the skill...", logo: js
    }, {
        id: "006", skillTitle: "TypeScript", description: "The detailed description of the skill...", logo: ts
    }, {
        id: "007", skillTitle: "React", description: "The detailed description of the skill...", logo: react
    }, {
        id: "008", skillTitle: "Redux", description: "The detailed description of the skill...", logo: redux
    }, {
        id: "009", skillTitle: "HTML", description: "The detailed description of the skill...", logo: html
    }, {
        id: "010", skillTitle: "CSS", description: "The detailed description of the skill...", logo: css
    }]
}

export const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}