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
                                <br />
                                <p className="firstText"><img src={logoIsis} className="logoArrow" /> Mordu d'informatique depuis l'enfance, j'ai souhaité faire de ma passion un métier. Après huit années passées dans le monde de la santé, j'ai décidé prendre un nouveau cap professionnel et réaliser ce projet.</p>
                                <br />
                                <p className="secondText"><img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p className="fourText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
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
                                <br />
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />Mordu d'informatique depuis l'enfance, j'ai souhaité faire de ma passion un métier. Après huit années passées dans le monde de la santé, j'ai décidé prendre un nouveau cap professionnel et réaliser ce projet.</p>
                                <br />
                                <p className="secondText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p className="fourText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                                <br />
                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
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
