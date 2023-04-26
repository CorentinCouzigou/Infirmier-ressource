
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";
import './MenuBurger.scss';

export default function MenuBurger({ MenuBurger }) {
    const [isOpen, setisOpen] = useState(MenuBurger);
    const changeStyle = () => {
        console.log('change button click');
        setisOpen(false);
    }
    return (
        <><div className="container" style={isOpen ? { left: 0 } : { left: "100%" }}  >
            <div className="closeButton">
                <button className="closeButton__logo" onClick={changeStyle} >
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
}
