
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";
import logoIsis from '../../assets/images/logo.svg';
import './MenuBurger.scss';

export default function MenuBurger({ MenuBurger, toggleMenu }) {
    const [isOpen, setisOpen] = useState(true);

    useEffect(() => {
        console.log('MenuBurger child', MenuBurger);
        console.log('isOpen child', isOpen);

    })
    return (
        <><div className={`container ${MenuBurger ? "showMenu" : "disableMenu"}`}  >
            <div className="closeButton">
                <button className="closeButton__logo" onClick={toggleMenu} >
                    <img src={logoIsis} className="logoIsisClose" />
                </button>
            </div>
            <div className="wrapper">
                <Link className="link" to="/">Accueil</Link>
                <Link className="link" to="/about">Qui je suis ?</Link>
                <Link className="link" to="/whyMe">Pourquoi moi en tant qu'IR?</Link>
                <Link className="link" to="/contact">Travaillons ensemble?</Link>
            </div>
        </div>
        </>
    );
}
MenuBurger.propTypes = {
    MenuBurger: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
}
