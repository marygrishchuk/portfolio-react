import storybook from "../assets/images/storybook.png"
import socialNetwork from "../assets/images/social-network.png"
import todoLists from "../assets/images/to-do_lists.png"
import cards from "../assets/images/cards.png"

let initialState = {
    projects: [
        {
            id: "001",
            projectTitle: "Cards",
            description: "A collaboration project designed using React, TypeScript, Redux, redux-thunk & Ant Design" +
                " as an app for creating packs of cards to learn by, and also for viewing, sending, downloading and" +
                " playing various types of files. Proud to be a team lead of our amazing Dream Team!",
            screenshot: cards,
            url: "https://marygrishchuk.github.io/cards-by-dream-team/"
        }, {
            id: "002",
            projectTitle: "Social Network",
            description: "Designed using React, TypeScript, Redux & redux-thunk as an independent social network.",
            screenshot: socialNetwork,
            url: "https://marygrishchuk.github.io/social-network-ts/#/login"
        }, {
            id: "003",
            projectTitle: "To-do List App",
            description: "React, Redux, TypeScript and Material-UI have been used in this project to help a user create lists of tasks.",
            screenshot: todoLists,
            url: "https://marygrishchuk.github.io/it-incubator-todolist-ts/"
        }, {
            id: "004",
            projectTitle: "The Storybook of React components",
            description: "Created with React, TypeScript & StoryBook to display and test each component easily.",
            screenshot: storybook,
            url: "https://marygrishchuk.github.io/it-kamasutra-react-with-storybook/?path=/story/example-introduction--page"
        }
    ]
}

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}