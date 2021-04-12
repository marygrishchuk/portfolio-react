import storybook from "../assets/images/storybook.png"
import socialNetwork from "../assets/images/social-network.png"
import todoLists from "../assets/images/to-do_lists.png"
import counter from "../assets/images/counter.png"

let initialState = {
    projects: [{
        projectTitle: "Social Network",
        description: "Designed using React, Redux, TypeScript & redux-thunk to as an independent social network",
        screenshot: socialNetwork,
        url: "https://marygrishchuk.github.io/social-network-ts/#/login"
    }, {
        projectTitle: "To-do List App",
        description: "React, Redux, TypeScript and Material-UI have been used in this project to help a user create lists of tasks.",
        screenshot: todoLists,
        url: "https://marygrishchuk.github.io/it-incubator-todolist-ts/"
    }, {
        projectTitle: "The Storybook of React components",
        description: "Created with React, TypeScript & StoryBook to display and test each component easily.",
        screenshot: storybook,
        url: "https://marygrishchuk.github.io/it-kamasutra-react-with-storybook/?path=/story/example-introduction--page"
    }, {
        projectTitle: "Counter",
        description: "A mini-app based on React, react-redux & TypeScript. And localStorage is used for preloading state.",
        screenshot: counter,
        url: "http://marygrishchuk.github.io/counter-with-redux"
    }]
}

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}