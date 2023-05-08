import React, { useState } from 'react';
import "./style.scss";
import MenuBurger from "../../components/MenuBurger/MenuBurger";
import { FaPrayingHands } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiUserVoice } from "react-icons/bi";
import { GiMagnifyingGlass, GiMedicalDrip, } from "react-icons/gi";
import { GoMortarBoard } from "react-icons/go";
import CustomButton from "../../components/CustomButton/CustomButton";
import { GiHamburgerMenu, GiHumanEar, GiTeacher } from "react-icons/gi";
function About() {
    const [isOpen, setisOpen] = useState(false);
    const toggleMenu = () => {
        setisOpen(!isOpen);
    }
    return (
        <>
            <div className="menuburger" onClick={toggleMenu}>
                <GiHamburgerMenu />
            </div>
            <MenuBurger MenuBurger={isOpen} toggleMenu={toggleMenu} />
            <div className="about">
                <div className="about__container">
                    <div className="about__presentation">
                        <div className="about__presentation__hello">
                            <div className="about__presentation__hello__line"> </div>{" "}
                            <span className="about__presentation__span">Qui suis-je ? </span>
                        </div>
                        <div className="about__presentation__container">
                            <div className="about__presentation__text">
                                <h1><em>Mon parcours</em></h1>
                                <br />
                                <p>Depuis dix années passées dans le monde de la santé, j'ai pu acquérir une expérience technique et humaine  me permettant de m'adapter facilement aux différents modes d'exercice que peut représenter le métier d'infirmier.
                                    Ayant le contact facile et une réelle écoute active, j'ai toujours eu pour but d'être au plus haut niveau en matière de qualité dans la prise en charge patient.</p>
                                <br />
                                <p>Faisant preuve de rigueur, étant pourvu d'un esprit curieux et ayant des dispositions pour la diplomatie, ces aptitudes me permettent de remettre mes pratiques en question et d’enrichir constamment mes connaissances. De plus, il m'a toujours tenu à coeur d'échanger et de transmettre  ce savoir pour garantir une meilleure prise en charge possible du patient. Durant mon cursus professionnel, j'ai déjà eu la chance d’exercer des postes de référent d'équipe, notamment en endoscopie digestive mais également en tant qu'infirmier coordinateur d’une unité de chirurgie ambulatoire.  Ainsi, j'ai pu épauler et guider mes consoeurs et confrères sur la voie des bonnes pratiques au quotidien. </p>
                                <br />
                                <p>Mon parcours en tant qu’infirmier conseil chez Isis Diabete, m'a permis d'acquerir une expérience dans la prestation en diabétologie. Cette pratique m'a apporté un certain savoir-faire et savoir-être dans ce domaine.
                                </p>
                                <br />
                                <p>C'est pourquoi, je souhaiterai faire évoluer mon exercice professionnel avec ce nouveau challenge d'infirmier ressource en mettant mes connaissances techniques et mes appitudes humaines au sein de votre entreprise que j'affectionne particulièrement. En effet, je suis sensible à la politique patient que propose Isis Diabete. Cet derniere est à mon sens un gage de qualité auprès des patients et permet un rayonnement de l'entreprise au près des prescripteurs. </p>
                                <br />
                                <a target="_blank" rel="noopener noreferrer" title="Curriculum Vitae" href="https://drive.google.com/file/d/1xDYXbSXOUJHNfiHYwKGUR-DDDhI_pqZJ/view?usp=sharing"><button className="home__presentation__button"> Mon CV </button></a>
                                {/* <a className="about__presentation__linkedin" title="Linkedin" href="https://www.linkedin.com/in/corentin-couzigou-0b200b175/"><SiLinkedin title="Linkedin" /></a> */}
                            </div>
                            <div className="wrapper__customButton__about">
                                <CustomButton type="button" link="/whyMe" text="Pourquoi moi en tant qu'IR ?" positionX={4} positionY={10} />
                            </div>
                            <div className="about__presentation__diploma">
                                <a target="_blank" className="card__diploma" title="Diplome d'infirmier" href="https://drive.google.com/file/d/13nVQIylW8fjyhju3QLI-6nlJ2vDqXGSF/view?usp=share_link">
                                    <GoMortarBoard />
                                    <span>Diplome d'état infirmier</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="about__logo">
                        <div className="about__presentation__hello">
                            <div className="about__presentation__hello__line"> </div>{" "}
                            <span className="about__presentation__span">Mes atouts ?</span>
                        </div>
                        <div className="about__logo__container">

                            <div className="about__logo__container__column">
                                <div className="about__logo__container__image1">
                                    <FaPrayingHands />
                                    <p className="textFont">Diplomate</p>
                                </div><div className="about__logo__container__image1">
                                    <HiOutlineLightBulb />
                                    <p className="textFont">Curiosité intéllectuelle</p>

                                </div>
                                <div className="about__logo__container__image1">
                                    <GiMedicalDrip />
                                    <p className="textFont">Savoir-faire</p>
                                </div>

                                <div className="about__logo__container__image1">
                                    <GiHumanEar />
                                    <p className="textFont">Ecoute active</p>
                                </div>
                            </div>
                            <div className="about__logo__container__column">
                                <div className="about__logo__container__image2">
                                    <GiTeacher />
                                    <p className="textFont">Transmission</p>
                                </div>
                                <div className="about__logo__container__image2">
                                    <GiMagnifyingGlass />
                                    <p className="textFont">Solutionneur</p>
                                </div>
                                <div className="about__logo__container__image2">
                                    <BiUserVoice />
                                    <p className="textFont">Aisance sociale</p>
                                </div>
                                <div className="about__logo__container__image2">
                                    <MdOutlineComputer />
                                    <p className="textFont">Compétences informatiques</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
