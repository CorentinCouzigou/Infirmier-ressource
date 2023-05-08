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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />L'infirmier ressource est le <em>garant des bonnes pratiques</em>. Il a pour mission <em>l'uniformisation les pratiques</em> afin de garantir la meilleure prise en charge patient. Ainsi il se doit d'évaluer fréquemment les pratiques de chacun ,et de proposer des axes d'amélioration , en plus de vérifier la bonne évolution des ces pratiques. Ces actions ont pour objectif  de garantir un niveau excellence pour le patient même lorsque ses suivis sont réalisés par differents infirmiers conseil. </p>
                                <br />
                                <br />
                                <br />
                                <p className="secondText"><img src={logoIsis} className="logoArrow" /> L'infirmier ressource a aussi pour rôle d'aider au <em>recrutement</em> de nouveaux infirmiers conseil. Il doit aussi veillier à la bonne <em>intégration de ces nouveaux arrivants</em> dans une équipe. Ainsi il doit aider à la formation des nouvelles recrues mais aussi suivre leurs évolutions et garantir toute l'aide nécessaire pour faciliter cette apprentissage. Ce suivi permet d'assurer à l'infirmier arrivant d'être à l'aise sur le terrain , mais également d'assurer un niveau de prise en charge optimum aux patients.</p>
                                <br />
                                <br />


                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource se doit etre doté d'un <em>esprit curieux </em>pour ainsi être toujours à la pointe en matière de connaissance technique. Remettre en question ses acquis et vouloir toujours aller chercher plus loin pour ainsi apporter un maximum de solutions en cas de problèmatiques.</p>
                                <br />
                                <br />


                                <p className="fourText"> <img src={logoIsis} className="logoArrow" /> L'infirmier ressource ayant un <em>role pivot</em> il a pour mission de <em>veillier à l'application et à la création des "process"</em> de l'entreprise. Ainsi il a pour charge de distiler la bonne compréhension de ces pratiques aux équipes et leur bonne utilisation sur le terrain. </p>
                                <br />
                                <br />
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" /><em>Etre a l'écoute</em> des équipes sur le terrain est primordial pour remonter les problématiques rencontrées. L'infirmier ressource doit savoir <em>solutionner</em> les problématiques mais aussi <em>échanger</em> sur ces dernieres avec ces collègues IR. </p>
                                <br />
                                <br />
                                <br />
                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource doit aussi être un capacité d'<em>animer les différentes reunion d'équipe</em>. Il doit être capable de propose un coutenu interessant et renouvellé sur des supports permettant une bonne compréhension des informations.  </p>
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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />Au cours de ma carrière j'ai déjà pu <em>excercer dans des rôles à responsabilité</em>. L'une de mes missions premières étaient le respect de la qualités des prises en charge.  , j'ai déjà eu en responsabilité l'implication des équipes au respecst de ces procédures. Par exemple ent tant qu'infirmier coordinateur de l'unité de chirurgie ambulatoire et de la salle d'endoscopie digestive interventionnelle, j'avais pour mission d'élaboration des process en matière de désinfections du matériel. Apres l'élaboration de ces procédures, j'ai du veillier à leur apprentissage et leurs applications aux pres des équipes.   </p>
                                <br />
                                <br />
                                <p className="secondText"> <img src={logoIsis} className="logoArrow" />Dans mon rôle <em>infirmier réferent</em> en endosciopie mais aussi chez Isis diabete, cela à toujours été un <em>plaisir de transmettre</em> et de former  les nouveaux arrivant. Ainsi j'ai déjà pu m'exercer à la formation et au suivi des ces nouvelles recrues et à l'évaluation des compétences maitrisées.</p>
                                <br />
                                <br />
                                <br />
                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />Ayant d'une <em>nature curieuse</em> il m'a toujours tenu à coeur de faire évoluer mes connaissances. Lors de mon parcours, notamment chez Isis Diabete mon implication dans mon exercice m'a permis d'acquerir des solites <em>compétences techniques</em>, <em>reconnues par le corps médical</em> (hôpital St Antoine et St Joseph à Paris) et par <em>mes pairs</em>. </p>
                                <br />
                                <br />

                                <p className="fourText"> <img src={logoIsis} className="logoArrow" />En tant qu'infirmier coordinateur j'ai déjà pu l'<em>élaboration ou l'application de différents protocoles </em> ou <em>veille à la mise en place de différentes process mis en place à l'hôpital</em>. J'ai notamment pu aider à l'élaboration et à la mise d'un nouvel pratique à l'hôpital "le patient debout" permettant à un patient d'aller au bloc opératoire debout et non plus sur un branquart et ainsi diminuer son stress pré-opératoire. Mon côté <em>diplomate</em> est un atout pour permettre la bonne adoption de ces nouvelles pratiques par les équipes.</p>
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" />
                                    Lors de mon exercice de <em>4ans en tant qu'IC chez Isis Diabete</em> m'a permis d'acquerir beaucoup de connaissances. Ces dernieres peuvent me permettre d'être à l'écoute des problématiques terrain et d'être<em>force de proposition</em> pour des solutions .</p>
                                <br />
                                <br />
                                <br />

                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />Ma faculté à d'avoir une <em>aisance orale</em> et d'avoir des <em>compétences en informatiques</em>, ces deux atouts me permettent de réaliser des exposées clairs sur des supports moderne permettant une meilleure transmission des informations</p>
                            </div>
                            <div className="wrapper__customButton__about">
                                <CustomButton type="button" link="/contact" text="On collabore?" positionX={4} positionY={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default WhyMe;
