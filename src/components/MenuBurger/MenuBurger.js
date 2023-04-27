
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";
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
                    <AiFillCloseCircle />
                </button>
            </div>
            <div className="wrapper">
                <Link className="link" to="/about">Accueil</Link>
                <Link className="link" to="/about">Qui je suis ?</Link>
                <Link className="link" to="/about">Pourquoi moi en tant qu'IR ?</Link>
            </div>
        </div>
        </>
    );
}
MenuBurger.propTypes = {
    MenuBurger: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
}
