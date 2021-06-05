import React from 'react';
import s from './ContactMe.module.scss';
import {useDispatch} from "react-redux";
import {onFormSubmit, STATUSES} from "../../redux/contact-form-reducer";
import {Title} from "../../common/components/Title/Title";
import '../../App.scss';
import commonStyle from "../../common/styles/Button.module.scss";
import notificationStyle from "../../common/styles/error.module.scss";
import {useFormik} from "formik";

const ContactMe = ({contactFormData}) => {
    let dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            messageText: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Name is required';
            }
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.messageText) {
                errors.messageText = 'Message is required';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(onFormSubmit(values))
            formik.resetForm()
        },
    })

    return (
        <div className={`${s.contactMe} chapter`} id={"contact-me"}>
            <Title text={"Contact Me"}/>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.formGroup}>
                    <input
                        className={s.field}
                        type="text"
                        {...formik.getFieldProps('name')}
                    />
                    <label className={s.formLabel}>*Name</label>

                    {formik.touched.name && formik.errors.name ? (
                        <div className={s.error}>{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className={s.formGroup}>
                    <input
                        className={s.field}
                        type="email"
                        {...formik.getFieldProps('email')}
                    />
                    <label className={s.formLabel}>*E-mail</label>

                    {formik.touched.email && formik.errors.email ? (
                        <div className={s.error}>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className={s.formGroup}>
                    <textarea
                        className={`${s.field} ${s.textarea}`}
                        {...formik.getFieldProps('messageText')}
                    />
                    <label className={s.formLabel}>*Message</label>

                    {formik.touched.messageText && formik.errors.messageText ? (
                        <div className={s.error}>{formik.errors.messageText}</div>
                    ) : null}
                </div>
                <button className={commonStyle.btn} type="submit"
                        disabled={contactFormData.requestStatus === STATUSES.LOADING}>Send
                </button>
                {contactFormData.resultInfo && <div className={contactFormData.requestStatus === STATUSES.FAILED
                    ? notificationStyle.error
                    : `${notificationStyle.error} ${notificationStyle.success}`}>{contactFormData.resultInfo}</div>}
            </form>
        </div>
    );
}

export default ContactMe;