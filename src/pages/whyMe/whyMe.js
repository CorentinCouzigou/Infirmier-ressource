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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />L'infirmier ressource est le <em>garant des bonnes pratiques</em>. L'infirmier ressource a pour mission l'uniformisation les pratiques afin de garantir la meilleur prise en charge patient. Ainsi se doit de évaluer fréquemment les pratiques de chacun , proposer des axes d'amélioration et vérifier la bonne évolution des ces pratiques. Cette uniformisation de pratiques permet de garantir un niveau excellence pour le patient même lors de suivis par differents infirmiers conseil. </p>
                                <br />
                                <br />
                                <p className="secondText"><img src={logoIsis} className="logoArrow" /> L'infirmier ressource se doit de vieiller à la bonne <em>intégration des nouveaux arrivants</em> dans une équipe. Ainsi il doit aider à la formation des nouvelles recrues mais aussi suivre leurs évolutions et garantir toute l'aide nécessaire pour faciliter cette apprentissage. Ce suivi permet d'assurer à l'infirmier arrivant d'être à l'aise sur le terrain , mais également d'assurer un niveau de prise en charge optimum des patients.</p>
                                <br />
                                <br />

                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource se doit d'avoir un <em>esprit curieux </em>et d'être toujours à la pointe en matière de connaissance technique. Se remettre en question sur ses acquis et vouloir toujours aller chercher plus loin pour ainsi apporter un maximum de solutions en cas de problèmatiques.</p>
                                <br />
                                <br />
                                <br />
                                <br />

                                <p className="fourText"> <img src={logoIsis} className="logoArrow" /> L'infirmier ressource ayant un <em>role pivot</em> il se doit de <em>veillier à l'application et à la création des "process"</em> en matiere de bonne pratiques. Ainsi il se doit de distiler la bonne compréhension de ces pratiques aux équipes et leur bonne utilisation sur le terrain. </p>
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" /> L'infirmier ressource se doit avoir une <em>écoute pour les équipes</em> sur le terrain. Ainsi il a pour mission de faire remonter les problèmatiques rencontrés par les infirmiers conseils et d'aider à <em>trouver des solutions.</em></p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource doit avec un <em>rôle d'échange</em> avec ces collègues infirmiers ressource. La tranmission de problèmatiques et des solutions apportées , peu permettre un autre secteur rencontrant les mêmes soucis </p>
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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />Au cours de ma carrière j'ai déjà pu excercer dans des rôles de referent en matière de qualité de prise charge patient.En effet lors mon exercice en tant que référent de bloc opératoire en endoscope digestive j'avais pour mission d'établir  </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p className="secondText"> <img src={logoIsis} className="logoArrow" />Après avoir passé plusieurs années en tant qu'infirmir réferent en endosciopie digestive,l'une de mes missions premiere était de former les nouveaux arrivant. Ainsi j'ai déjà pu m'exercer à la formation de nouveau x arrivants et de leur évolution et de évaluation de mes formations.</p>
                                <br />
                                <br />
                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />De nature curieuse et pour toujours répondre de la meilleure manière possible au  demandes médicales et à celles des patients il m'a été tenu à coeur de faire évoluer mes connaissances. Lors de mon parcours, notamment chez Isis Diabet mon implication dans mon exercice m'a permis d'acquerir des solites compétences techniques, reconnues par le coprs médical et  par mes pairs. </p>
                                <br />
                                <br />

                                <p className="fourText"> <img src={logoIsis} className="logoArrow" />En tant qu'infirmier coordinateur j'avais pour mission d'informer et de mettre en oeuvre aux pres des équipes les nouveaux process pour etre mis en place à l'hôpital. Faisant partie de comité de pilotage de la chirurgie ambulatoire j'avais pour mission de participer à l'élaboration de ces process. J'ai notamment pu aider à l'élaboration et à la mise du " patient debout" permettant à un patient d'aller au bloc opératoire debout non plus sur un branquart et ainsi diminuer le stress du patient. Mon côté diplomate est un avantage dans cette mission. </p>
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" />Dans mon exercice d'infirmier coordinateur il était primordial de faire remonter les problèmatiques rencontrées sur le terrain et chercher des solutions au quotidien. Ainsi j'ai déjà pu m'exercer à toujours être force de proposition pour solutionner differentes problématiques. Ma capacité d'écoute active, acqueris  au long de mes annnes d'exercices me permet d'avoir l'attention necessaire pour attentif au remonter terrain.</p>
                                <br />
                                <br />

                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />L'échange et la tranmission d'information est à mon sens garant d'une meilleure prise en charge patient. En effet échanger sur des problèmatiques ou des intérogations permet d'avoir différents points de vue. De cet échange nait régulièrement des solutions adaptées et cohérentes. Ayant un aisance sociale et une écoute bienveillance ,cela me permet d'être toujours ouvert à l'échange.</p>
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
