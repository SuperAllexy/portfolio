import { useState } from "react";
import React, { useRef } from 'react';
import emails from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState({ to_name: "", from_name: "", message: "" });
    const [formErrors, setFormErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleValidation = (values) => {
        const errors = {};
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const numberRegex = /\d/;

        if (!values.to_name) {
            errors.to_name = "Enter your full name";
        }
        else if (numberRegex.test(values.to_name)) {
            errors.to_name = "Full name can't be numbers!";
        }
        if (!values.from_name) {
            errors.from_name = "Enter your email";
        }
        else if (!emailRegex.test(values.from_name)) {
            errors.from_name = "Imvalid email format";
        }
        if (!values.message) {
            errors.message = "Message field can't be empty";
        }
        else if (values.message.length < 10) {
            errors.message = "The message should contain min. 10 characters";
        }
        return errors;
    }

    const submitForm = (e) => {
        e.preventDefault();
        setFormErrors(handleValidation(formValues));
        if (Object.keys(handleValidation(formValues)).length > 0) {
        }
        else {
            setSubmit(true);
            setFormValues({ to_name: "", from_name: "", message: "" });

            emails
                .sendForm('service_iwpnbsb', 'template_aoptz8f', form.current, {
                    publicKey: '44g4RfROqdx_sHnf9',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    }
    return (
        <section className="contact-us-form ">
            {submit ?
                <section className="form-success">
                    <h3>Message successfully sent!</h3>
                    <p>I will get back to you as soon as possible!</p>
                    <button type="button" onClick={() => setSubmit(false)}>Send again</button>
                </section> :
                <form ref={form} className="contact-form form-tag" onSubmit={submitForm}>
                    <section className="contact-form-item">
                        <input
                            onChange={handleChange}
                            value={formValues.to_name}
                            className="to_name-input"
                            color="red"
                            type="text"
                            placeholder="Full name"
                            name="to_name"
                        />
                        <br></br>
                        <label className="to_name-error">{formErrors.to_name}</label>
                    </section>
                    <section className="contact-form-item">
                        <input onChange={handleChange}
                               value={formValues.from_name} name="from_name" className="from_name-input" type="text" placeholder="Email" />
                        <br></br>
                        <label className="from_name-error">{formErrors.from_name}</label>
                    </section>
                    <section className="contact-form-item">
            <textarea
                onChange={handleChange}
                value={formValues.message} name="message" className="textarea-input" placeholder="Message" />
                        <br></br>
                        <label className="textarea-error">{formErrors.message}</label>
                    </section>
                    <section className="contact-form-item">
                        <button type="submit">
                            Send
                        </button>
                        <br></br>
                    </section>
                </form>}
        </section>
    );
}

export default ContactForm;
