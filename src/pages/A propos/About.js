import React, { useState } from 'react';
import "./style.scss";
import MenuBurger from "../../components/MenuBurger/MenuBurger";
import { FaPrayingHands } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import {  GiMagnifyingGlass, GiMedicalDrip } from "react-icons/gi";
import { GoMortarBoard } from "react-icons/go";
import CustomButton from "../../components/CustomButton/CustomButton";
import { GiHamburgerMenu, GiHumanEar, GiTeacher, GiConfrontation } from "react-icons/gi";
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
                            <span className="about__presentation__span">Qui je suis ? </span>
                        </div>
                        <div className="about__presentation__container">
                            <div className="about__presentation__text">
                                <h1>Mon parcours</h1>
                                <br />
                                <p>Mordu d'informatique depuis l'enfance, j'ai souhaité faire de ma passion un métier. Après huit années passées dans le monde de la santé, j'ai décidé prendre un nouveau cap professionnel et réaliser ce projet.</p>
                                <br />
                                <p>J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p>Mon ancien domaine d'exercice ma permis d'être à l'écoute des autres et à faire preuve d'adaptabilité, je suis donc à l'aise dans un environnement de travail de type méthode Agile/Scrum.</p>
                                <br />
                                <p>Aujourd'hui je travaille au sein d'une équipe informatique dynamique depuis mars 2022 chez
                                    GMS Group en constant distanciel. Je souhaiterai dorénavant
                                    intégrer une équipe sur site pour regagner en contact humain tout en utilisant et développant
                                    mes compétences.</p>
                                <br />
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
                                    <GiConfrontation />
                                    <p className="textFont">Echange</p>
                                </div>
                                <div className="about__logo__container__image2">
                                    <MdOutlineComputer />
                                    <p className="textFont">A l'aise avec l'informatique</p>
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
