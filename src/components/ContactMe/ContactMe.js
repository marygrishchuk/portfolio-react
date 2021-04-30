import React, {useEffect, useState} from 'react';
import s from './ContactMe.module.css';
import {useDispatch} from "react-redux";
import {onFormSubmit} from "../../redux/contact-form-reducer";
import {Title} from "../../common/components/Title/Title";
import '../../App.scss';
import commonStyle from "../../common/styles/Button.module.scss";

const ContactMe = ({contactForm}) => {
    let dispatch = useDispatch()

    let [name, setName] = useState(contactForm.name)
    let [email, setEmail] = useState(contactForm.email)
    let [messageText, setMessageText] = useState(contactForm.messageText)
    let [error, setError] = useState("")

    useEffect(() => {
        debugger
        setName(contactForm.name)
        setEmail(contactForm.email)
        setMessageText(contactForm.messageText)
    }, [contactForm])

    let onNameInput = (e) => {
        setName(e.currentTarget.value.trim())
        setError("")
    }
    let onEmailInput = (e) => {
        setEmail(e.currentTarget.value.trim())
        setError("")
    }
    let onMessageInput = (e) => {
        setMessageText(e.currentTarget.value.trim())
        setError("")
    }

    let onSubmit = (e) => {
        if (name && email && messageText) {
            dispatch(onFormSubmit(name, email, messageText))
        } else {
            setError('All fields are required')
        }
        e.preventDefault()
    }

    return (
        <div className={`${s.contactMe} chapter`} id={"contact-me"}>
            <Title text={"Contact Me"}/>
            <form onSubmit={onSubmit} className={s.form}>
                <input type="text" placeholder={"*Name"} className={s.field} value={name} onChange={onNameInput}/>

                <input type="email" placeholder={"*E-mail"} className={s.field} value={email}
                       onChange={onEmailInput}/>
                <textarea className={`${s.field} ${s.textarea}`} placeholder={"*Your message"} value={messageText}
                          onChange={onMessageInput}/>
                {error && <div className={s.error}>{error}</div>}
                <button className={commonStyle.btn}>Send</button>
            </form>
        </div>
    );
}

export default ContactMe;