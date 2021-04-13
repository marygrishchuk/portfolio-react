import React, {useState} from 'react';
import s from './ContactMe.module.css';
import {useDispatch, useSelector} from "react-redux";
import {onFormSubmit} from "../../redux/contact-form-reducer";

function ContactMe() {
    let state = useSelector(state => state)
    let dispatch = useDispatch()

    let [name, setName] = useState(state.contactForm.name)
    let [email, setEmail] = useState(state.contactForm.email)
    let [messageText, setMessageText] = useState(state.contactForm.messageText)

    let onNameInput = (e) => {
        setName(e.currentTarget.value)
    }
    let onEmailInput = (e) => {
        setEmail(e.currentTarget.value)
    }
    let onMessageInput = (e) => {
        setMessageText(e.currentTarget.value)
    }

    let onSubmit = (e) => {
        dispatch(onFormSubmit(name, email, messageText))
        e.preventDefault()
    }

    return (
        <div className={s.contactMe} id={"contact-me"}>
            <h2 className={s.title}>Contact Me</h2>
            <hr className={s.line}/>
            <form onSubmit={onSubmit} className={s.form}>
                <input type="text" placeholder={"Name"} className={s.field} value={name} onChange={onNameInput}/>
                <input type="email" placeholder={"E-mail"} className={s.field} value={email} onChange={onEmailInput}/>
                <textarea className={`${s.field} ${s.textarea}`} placeholder={"Your message"} value={messageText}
                          onChange={onMessageInput}/>
                <button className={s.btn}>SEND MESSAGE</button>
            </form>
        </div>
    );
}

export default ContactMe;