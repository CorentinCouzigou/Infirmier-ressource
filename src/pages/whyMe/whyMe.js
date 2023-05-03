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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />L'infirmier ressource est le <em>garant des bonnes pratiques</em>. Il a pour mission l'uniformisation les pratiques afin de garantir la meilleure prise en charge patient. Ainsi il se doit d'évaluer fréquemment les pratiques de chacun ,et de proposer des axes d'amélioration , en plus de vérifier la bonne évolution des ces pratiques. Ces actions ont pour objectif  de garantir un niveau excellence pour le patient même lorsque ses suivis sont réalisés par differents infirmiers conseil. </p>
                                <br />
                                <br />
                                <p className="secondText"><img src={logoIsis} className="logoArrow" /> L'infirmier ressource se doit de vieiller à la bonne <em>intégration des nouveaux arrivants</em> dans une équipe. Ainsi il doit aider à la formation des nouvelles recrues mais aussi suivre leurs évolutions et garantir toute l'aide nécessaire pour faciliter cette apprentissage. Ce suivi permet d'assurer à l'infirmier arrivant d'être à l'aise sur le terrain , mais également d'assurer un niveau de prise en charge optimum aux patients.</p>
                                <br />
                                <br />

                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource doit etre doté d'un <em>esprit curieux </em>pour ainsi être toujours à la pointe en matière de connaissance technique. Remettre en question ses acquis et vouloir toujours aller chercher plus loin pour ainsi apporter un maximum de solutions en cas de problèmatiques.</p>
                                <br />
                                <br />
                                <br />
                                <br />

                                <p className="fourText"> <img src={logoIsis} className="logoArrow" /> L'infirmier ressource ayant un <em>role pivot</em> il a pour mission de <em>veillier à l'application et à la création des "process"</em> de l'entreprise. Ainsi il a pour charge de distiler la bonne compréhension de ces pratiques aux équipes et leur bonne utilisation sur le terrain. </p>
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" /><em>Etre a l'écoute</em> des équipes sur le terrain est primordial pour remonter les problématiques rencontrées. L'infirmier ressource doit savoir <em>solutionner</em> les problématiques mais aussi transmettre ces dernieres. </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource doit avec un <em>rôle d'échange</em> avec ces collègues infirmiers ressource. La tranmission d'informatuins ,problèmatiques, ou solutions peu permettre à un autre secteur d'évoluer lui aussi dans la qualité de ses prises en charge. </p>
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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />Au cours de ma carrière j'ai déjà pu excercer dans des rôles à responsabilité. L'une de mes missions premières étaient le respect de la qualités des prises en charge. Ainsi à travers l'élaboration ou l'application de différents protocoles , j'ai déjà eu en responsabilité l'implication des équipes au respecst de ces procédures. Par exemple ent tant qu'infirmier coordinateur de l'unité de chirurgie ambulatoire et de la salle d'endoscopie digestive interventionnelle, j'avais pour mission d'élaboration des process en matière de désinfections du matériel. Apres l'élaboration de ces procédures, j'ai du veillier à leur apprentissage et leurs applications aux pres des équipes.   </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p className="secondText"> <img src={logoIsis} className="logoArrow" />Dans mon rôle infirmier réferent en endosciopie digestive, il m'imcombais  de former les nouveaux arrivant. Ainsi j'ai déjà pu m'exercer à la formation et au suivi des ces nouvelles recrues et à l'évaluation des compétences maitrisées.</p>
                                <br />
                                <br />
                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />De nature curieuse et dans le but de toujours répondre de la meilleure manière possible au  demandes médicales et à celles des patients, il m'a toujours tenu à coeur de faire évoluer mes connaissances. Lors de mon parcours, notamment chez Isis Diabet mon implication dans mon exercice m'a permis d'acquerir des solites compétences techniques, reconnues par le coprs médical et par mes pairs. </p>
                                <br />
                                <br />

                                <p className="fourText"> <img src={logoIsis} className="logoArrow" />En tant qu'infirmier coordinateur j'avais pour mission d'informer et de mettre en oeuvre aux pres des équipes les nouveaux process pouvant être mis en place à l'hôpital. Faisant partie du comité de pilotage de la chirurgie ambulatoire j'avais pour mission de participer à l'élaboration de ces process. J'ai notamment pu aider à l'élaboration et à la mise du " patient debout" permettant à un patient d'aller au bloc opératoire debout et non plus sur un branquart. L'objectif principal était encore une fois de veillier à la meilleure prise en charge du patient. Après une étude en interne nous avions observer une diminution significatif du stress des patient en préopratoire.
                                    Mon côté diplimation est un atout pour permettre la bonne adoption de ces nouvelles pratiques par les équipes. </p>
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" />Dans mon exercice d'infirmier coordinateur il était primordial de faire remonter les problèmatiques rencontrées sur le terrain, ainsi que de chercher des solutions au quotidien. Ainsi j'ai déjà pu m'exercer à toujours être force de proposition pour solutionner differentes problématiques. Ma capacité d'adaptation et d'écoute active, acqueris  au long de mes annnes d'exercices me permet d'avoir la réactivité et l'attention attendues.</p>
                                <br />
                                <br />

                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />L'échange et la tranmission d'information ont à mon sens un facteur primordial pour une qualité de prise en charge. En effet l'échange est source d'enrichissement permanent et permet d'avoir différents points de vue sur des informations, des interrogations. De cela régulièrement des solutions adaptées et cohérentes au différentes problèmatiques. Ayant un aisance sociale et une écoute bienveillance ,cela me permet d'être toujours ouvert à l'échange.</p>
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
