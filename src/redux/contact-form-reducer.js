import {sendMessageAPI} from "../api/api";

const SET_FORM_DATA = "SET_FORM_DATA"
const SET_RESULT_INFO = "SET_RESULT_INFO"

let initialState = {
    name: "",
    email: "",
    messageText: "",
    resultInfo: ""
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
        case SET_RESULT_INFO: {
            return {
                ...state,
                resultInfo: action.resultInfo,
            }
        }
        default:
            return state
    }
}

const setFormData = (name, email, messageText) => ({type: SET_FORM_DATA, name, email, messageText})
const setResultInfo = (resultInfo) => ({type: SET_RESULT_INFO, resultInfo})

export const onFormSubmit = (values) => (dispatch) => {
    dispatch(setFormData(values.name, values.email, values.messageText))
    sendMessageAPI.sendMessage(values.name, values.email, values.messageText)
        .then(res => {
            if (res.data === 'ok') {
                dispatch(setResultInfo("Thank for your message! I'll contact you back soon."))
            } else {
                dispatch(setResultInfo(res.data))
            }
            setTimeout(() => {
                dispatch(setResultInfo(""))
            }, 3000)
        })
        .catch(error => console.warn(error))
}