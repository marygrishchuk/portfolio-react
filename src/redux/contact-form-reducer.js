import {sendMessageAPI} from "../api/api";

const SET_RESULT_INFO = "SET_RESULT_INFO"
const SET_REQUEST_STATUS = "SET_REQUEST_STATUS"
export const STATUSES = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    FAILED: "failed"
}

let initialState = {
    resultInfo: "",
    requestStatus: STATUSES.IDLE
}

export const contactFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT_INFO: {
            return {
                ...state,
                resultInfo: action.resultInfo,
            }
        }
        case SET_REQUEST_STATUS: {
            return {
                ...state,
                requestStatus: action.requestStatus,
                resultInfo: action.requestStatus === STATUSES.LOADING
                    ? "Please wait..."
                    : action.requestStatus === STATUSES.SUCCESS
                        ? "Thank for your message! I'll contact you back soon."
                        : state.resultInfo
            }
        }
        default:
            return state
    }
}

const setResultInfo = (resultInfo) => ({type: SET_RESULT_INFO, resultInfo})
const setRequestStatus = (requestStatus) => ({type: SET_REQUEST_STATUS, requestStatus})

export const onFormSubmit = (values) => (dispatch) => {
    dispatch(setRequestStatus(STATUSES.LOADING))
    sendMessageAPI.sendMessage(values.name, values.email, values.messageText)
        .then(res => {
            if (res.data === 'ok') {
                dispatch(setRequestStatus(STATUSES.SUCCESS))
            } else {
                dispatch(setResultInfo(res.data))
                dispatch(setRequestStatus(STATUSES.FAILED))
            }
        })
        .catch(error => {
            dispatch(setResultInfo(error))
            dispatch(setRequestStatus(STATUSES.FAILED))
        })
    setTimeout(() => {
        dispatch(setResultInfo(""))
    }, 3000)
}