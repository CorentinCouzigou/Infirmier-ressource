/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useRef } from "react";
import "./style.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuBurger from "../../components/MenuBurger/MenuBurger";
import Typewriter from "typewriter-effect";
import Loading from '../../components/Loading/Loading';
import homeData from './homeData';
import logoIsis from '../../assets/images/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";

function Accueil() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setisOpen] = useState(false);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current > 0) {
      //change this for work my site
      setLoading(false);
    }
  }
  const openBurgerMenu = () => {
    console.log('tata');
    setisOpen(true);
    console.log('isOpen parent', isOpen)
  }
  const toggleMenu = () => {
    setisOpen(!isOpen);
  }
  return (
    <>
      <div style={{ display: loading ? "block" : "none" }}>
        {/* <Loading /> */}
        <img src={logoIsis} className="logoIsis" />
      </div>

      <div style={{ display: loading ? "none" : "flex" }} className="home">
        <MenuBurger MenuBurger={isOpen} toggleMenu={toggleMenu} />
        <div className="menuburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        <div className="home__container">
          <div className="home__presentation">
            <div className="home__presentation__container">
              <div className="home__presentation__hello">
                <div className="home__presentation__hello__line"> </div>{" "}
                <span className="home__presentation__span">Bonjour, je suis</span>
              </div>{" "}
              <h1 className="home__presentation__name glitch" data-text="glitch" >  Corentin Couzigou {process.env.REACT_APP_SECRET_KEY}</h1>
              <div className="home__presentation__devContainer">
                <p className="home__presentation__dev"> Infirmier </p>{" "}
                <Typewriter
                  className="home__presentation__typewriter"
                  options={{
                    autoStart: true,
                    loop: true,
                    pauseFor: 1500,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("conseil")
                      .pauseFor(900)
                      .deleteAll()
                      .typeString("ressource ?")
                      .pauseFor(1200)
                      .deleteAll()
                      .start();
                  }}
                />{" "}
              </div>{" "}
              <br />
              <a target="_blank" rel="noopener noreferrer" title="Curriculum Vitae" href="https://drive.google.com/file/d/1O5X-DtqA5hzcSr9wd-1EoAC3ZQcwUGUc/view?usp=share_link"><button className="home__presentation__button"> Mon CV </button></a>
            </div>{" "}
            <div className="wrapper__customButton__home">
              <CustomButton type="button" link="/about" text="Qui je suis ?" />
            </div>
          </div>
          <div className="home__image">
            {homeData.map((item) => {
              return (
                <img onLoad={imageLoaded} key={item.id} className="home__image__photo" src={item.image} alt={item.description} />)
            })}
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Accueil;
