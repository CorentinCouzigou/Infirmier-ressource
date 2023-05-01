import React, { useState } from 'react';
import "./style.scss";
import MenuBurger from "../../components/MenuBurger/MenuBurger";
import CustomButton from "../../components/CustomButton/CustomButton";
import { GiHamburgerMenu } from "react-icons/gi";
import logoIsis from '../../assets/images/logo.svg';
function WhyMe() {
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
                            <span className="about__presentation__span">Etre infirmier ressource c'est quoi ? </span>
                        </div>
                        <div className="about__presentation__container">
                            <div className="about__presentation__text">
                                <h1>Mon parcours</h1>
                                <br />
                                <p className="firstText"><img src={logoIsis} className="logoArrow" /> Mordu d'informatique depuis l'enfance, j'ai souhaité faire de ma passion un métier. Après huit années passées dans le monde de la santé, j'ai décidé prendre un nouveau cap professionnel et réaliser ce projet.</p>
                                <br />
                                <p className="secondText"><img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p>Mon ancien domaine d'exercice ma permis d'être à l'écoute des autres et à faire preuve d'adaptabilité, je suis donc à l'aise dans un environnement de travail de type méthode Agile/Scrum.</p>
                                <br />
                                <p>Aujourd'hui je travaille au sein d'une équipe informatique dynamique depuis mars 2022 chez
                                    GMS Group en constant distanciel. Je souhaiterai dorénavant
                                    intégrer une équipe sur site pour regagner en contact humain tout en utilisant et développant
                                    mes compétences.</p>
                            </div>
                        </div>

                    </div>
                    <div className="about__logo">
                        <div className="about__presentation__hello">
                            <div className="about__presentation__hello__line"> </div>{" "}
                            <span className="about__presentation__span">Pourquoi moi ?</span>
                        </div>

                        <div className="about__presentation__container">
                            <div className="about__presentation__text">
                                <h1>Mon parcours</h1>
                                <br />
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />Mordu d'informatique depuis l'enfance, j'ai souhaité faire de ma passion un métier. Après huit années passées dans le monde de la santé, j'ai décidé prendre un nouveau cap professionnel et réaliser ce projet.</p>
                                <br />
                                <p className="secondText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p>Mon ancien domaine d'exercice ma permis d'être à l'écoute des autres et à faire preuve d'adaptabilité, je suis donc à l'aise dans un environnement de travail de type méthode Agile/Scrum.</p>
                                <br />
                                <p>Aujourd'hui je travaille au sein d'une équipe informatique dynamique depuis mars 2022 chez
                                    GMS Group en constant distanciel. Je souhaiterai dorénavant
                                    intégrer une équipe sur site pour regagner en contact humain tout en utilisant et développant
                                    mes compétences.</p>
                            </div>
                            <div className="wrapper__customButton__about">
                                <CustomButton type="button" link="/contact" text="On collabore?" positionX={4} positionY={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyMe;
