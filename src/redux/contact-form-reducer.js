const SET_FORM_DATA = "SET_FORM_DATA"

let initialState = {
    name: "",
    email: "",
    messageText: ""
}

export const contactFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            return {
                ...state,
                name: action.name,
                email: action.email,
                messageText: action.messageText
            }
        }
        default:
            return state
    }
}

const setFormData = (name, email, messageText) => ({type: SET_FORM_DATA, name, email, messageText})

export const onFormSubmit = (values) => (dispatch) => {
    dispatch(setFormData(values.name, values.email, values.messageText))
    //sending the form data to a server .then().catch()
    console.log("The following data have been sent to the server: ", values.name, values.email, values.messageText)
    alert('Your message has been successfully sent. Please wait for a reply to your email.')
}