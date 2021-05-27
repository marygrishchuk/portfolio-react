import js from "../assets/images/js.png"
import ts from "../assets/images/ts.png"
import react from "../assets/images/react.svg"
import redux from "../assets/images/redux.png"
import html from "../assets/images/html.jpg"
import css from "../assets/images/css.svg"

let initialState = {
    skills: [{
        id: "005", skillTitle: "JavaScript", description: "Proud to have this essential knowledge.", logo: js
    }, {
        id: "006", skillTitle: "TypeScript",
        description: "Enjoying app development with TypeScript because it helps you avoid bugs so easily.", logo: ts
    }, {
        id: "007", skillTitle: "React", description: "Creating React apps.", logo: react
    }, {
        id: "008", skillTitle: "Redux",
        description: "Experienced in using Redux in my projects as well as redux-thunk, react-redux, Redux Toolkit & redux-form.",
        logo: redux
    }, {
        id: "009", skillTitle: "HTML/CSS/SaSS", description: "Capable of creating a nicely designed webpages.", logo: html
    }, {
        id: "010", skillTitle: "REST API", description: "Making REST API calls with axios.", logo: css
    }]
}

export const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}