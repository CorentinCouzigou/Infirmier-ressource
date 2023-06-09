import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBurger from "../../components/MenuBurger/MenuBurger";
import { schema } from '../../validation/contact';
import emailjs from 'emailjs-com';
import { GiHamburgerMenu } from "react-icons/gi";
import './contact.scss';

function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [messageError, setMessageError] = useState("");
    const navigate = useNavigate();
    const form = useRef();
    const inputErrorMessageForName = useRef();
    const inputErrorMessageForEmail = useRef();
    const inputErrorMessageForMessage = useRef();
    const [isOpen, setisOpen] = useState(false);
    const toggleMenu = () => {
        setisOpen(!isOpen);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let errorMessage = schema.validate({
            nom: fullName,
            email: email,
            message: text,
        }).error;
        switch (`${errorMessage}`) {
            case 'ValidationError: "nom" is not allowed to be empty':
                setMessageError(`Un nom est nécessaire.`);
                inputErrorMessageForName.current.style.border = "2px solid #d7537d";
                inputErrorMessageForEmail.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForMessage.current.style.border = "2px solid #6fbbc6";
                break;
            case `ValidationError: "nom" with value "${fullName}" fails to match the required pattern: /^[A-Za-zâéèêÏîïÉç -.]*$/`:
                setMessageError(`Un nom valide est nécessaire. Pas de caractères spéciaux, ni de chiffre.`);
                inputErrorMessageForName.current.style.border = "2px solid #d7537d";
                inputErrorMessageForEmail.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForMessage.current.style.border = "2px solid #6fbbc6";
                break;
            case `ValidationError: "nom" must only contain alpha-numeric characters`:
                setMessageError(`Un nom valide est nécessaire, sans caractères spéciaux.`);
                inputErrorMessageForName.current.style.border = "2px solid #d7537d";
                inputErrorMessageForEmail.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForMessage.current.style.border = "2px solid #6fbbc6";
                break;
            case `ValidationError: "email" is not allowed to be empty`:
                setMessageError(`Un Email est nécessaire.`);
                inputErrorMessageForName.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForEmail.current.style.border = "2px solid #d7537d";
                inputErrorMessageForMessage.current.style.border = "2px solid #6fbbc6";
                break;
            case `ValidationError: "email" must be a valid email`:
                setMessageError(`Un Email valide est nécessaire.`);
                inputErrorMessageForName.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForEmail.current.style.border = "2px solid #d7537d";
                inputErrorMessageForMessage.current.style.border = "2px solid #6fbbc6";
                break;
            case `ValidationError: "email" with value "${email}" fails to match the required pattern: /^[A-zÀ-ú-9a-z._%+-]+@[a-z0-9.-]+\\.[a-z]{1,4}}*$/`:
                setMessageError(`Un Email valide est nécessaire.`);
                inputErrorMessageForName.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForEmail.current.style.border = "2px solid #d7537d";
                inputErrorMessageForMessage.current.style.border = "2px solid #6fbbc6";
                break;
            case `ValidationError: "message" is not allowed to be empty`:
                setMessageError(`Un message est nécessaire.`);
                inputErrorMessageForName.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForEmail.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForMessage.current.style.border = "2px solid #d7537d";
                break;
            case `ValidationError: "message" with value "${text}" fails to match the required pattern: /^[A-Za-zéèÏïîêÉç0-9 ,;!:-?@.\\n]*$/`:
                setMessageError(`Un message valide est nécessaire. Pas de caractères spéciaux, et sans émoticône.`);
                inputErrorMessageForName.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForEmail.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForMessage.current.style.border = "2px solid #d7537d";
                break;
            case 'undefined':
                inputErrorMessageForName.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForEmail.current.style.border = "2px solid #6fbbc6";
                inputErrorMessageForMessage.current.style.border = "2px solid #6fbbc6";
                emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, event.target, process.env.REACT_APP_EMAILJS_USER_ID).then(function (response) {
                    setMessageError("Votre message a bien été envoyé. Redirection vers la page d'accueil.");
                    const timer = setTimeout(() => {
                        navigate('/');
                    }, 2500)
                    return () => clearTimeout(timer);
                }, function (error) {
                    setMessageError("Erreur lors de l'envoie de votre message.");
                    console.log('FAILED...', error);
                });
                break;
            default:
                setMessageError(`${errorMessage}`);
        }
    }

    return (
        <>
            <div className="menuburger" onClick={toggleMenu}>
                <GiHamburgerMenu />
            </div>
            <MenuBurger MenuBurger={isOpen} toggleMenu={toggleMenu} />
            <div className="contact">
                <div className="contact__container">
                    <div className="contact__presentation__hello">
                        <div className="contact__presentation__hello__line"> </div>{" "}
                        <p className="contact__presentation__span">On collabore pour garantir la meilleure prise en charge patient ? </p>

                    </div>

                    <form ref={form} className="contact__form" onSubmit={handleSubmit}>
                        <label className="contact__form__label" htmlFor="name">Votre nom</label>
                        <input ref={inputErrorMessageForName} className="contact__form__input" name="name" placeholder="Nom" id="name" type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />

                        <label className="contact__form__label" htmlFor="email">Votre Email</label>
                        <input ref={inputErrorMessageForEmail} className="contact__form__input" value={email} name="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email" id="email" type="text" />

                        <label className="contact__form__label" htmlFor="userText">Votre message</label>
                        <textarea ref={inputErrorMessageForMessage} className="contact__form__input --textarea" name="message" value={text} onChange={(event) => setText(event.target.value)} placeholder="Message" id="userText" />

                        <div className="contact__form__validation">
                            <button className="contact__form__validation__button" type="submit">Envoyer</button><span className="contact__form__validation__span">{messageError}</span>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;
