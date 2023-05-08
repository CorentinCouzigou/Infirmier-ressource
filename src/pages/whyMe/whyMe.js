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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />L'infirmier ressource est le <em>garant des bonnes pratiques</em>. Il a pour mission <em>l'uniformisation des pratiques</em> afin de garantir la meilleure prise en charge patient. Il doit évaluer fréquemment les pratiques de chacun, proposer des axes d'améliorations et vérifier la bonne évolution de ces pratiques. Ces actions ont pour objectif  de garantir un niveau d'excellence pour le patient même lorsque ses suivis thérapeutiques sont réalisés par différents infirmiers conseils. </p>
                                <br />
                                <br />
                                <br />
                                <p className="secondText"><img src={logoIsis} className="logoArrow" /> L'infirmier ressource a pour rôle d'aider au <em>recrutement</em> de nouveaux infirmiers conseils. Il veille à la bonne <em>intégration des nouveaux arrivants</em> dans une équipe. Il contribue à la formation des nouvelles recrues, il suit leurs évolutions et garanti toute l'aide nécessaire pour faciliter cette apprentissage. Ce suivi permet d'assurer à l'infirmier arrivant d'être à l'aise sur le terrain, mais également d'assurer un niveau de prise en charge optimal des patients.</p>
                                <br />
                                <br />


                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource doit être doté d'un <em>esprit curieux </em>pour toujours être à la pointe  des connaissances techniques. Il faut savoir remettre en question ses acquis et  toujours aller chercher plus loin pour ainsi apporter un maximum de solutions aux problèmatiques.</p>
                                <br />
                                <br />


                                <p className="fourText"> <img src={logoIsis} className="logoArrow" /> L'infirmier ressource ayant un <em>rôle pivot</em>, il a pour mission de <em>veiller à l'application et à la création des "process"</em> de l'entreprise. Ainsi, il a pour charge de distiler la bonne compréhension de ces pratiques aux équipes et leurs bonnes utilisations sur le terrain. </p>
                                <br />
                                <br />
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" /><em>Etre à l'écoute</em> des équipes sur le terrain est primordial pour remonter les problématiques rencontrées. L'infirmier ressource doit savoir <em>solutionner</em> les problématiques mais aussi <em>échanger</em> sur ces dernières avec ces collègues IR. </p>
                                <br />
                                <br />
                                <br />
                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource doit aussi être capable d'<em>animer différentes reunions d'équipe</em>. Il doit  savoir  proposer un coutenu interessant et renouvelé sur des supports permettant une bonne compréhension des informations.  </p>
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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />Au cours de ma carrière, j'ai déjà eu la chance d'<em>excercer des rôles à responsabilités</em>, notamment en tant qu'infirmier coordinateur de l'unité de chirurgie ambulatoire et infirmier référent de la salle d'endoscopie digestive interventionnelle . L'une de mes missions premières était le respect de la qualité des prises en charge et de vérifier l'implication des équipes soignantes aux différentes procédures. Etant en <em>adhéquation</em> avec la <em>politique patient d'Isis Diabete</em>, il me tient à coeur de garantir cette derniere. </p>
                                <br />
                                <br />
                                <p className="secondText"> <img src={logoIsis} className="logoArrow" />J'ai toujours eu un <em>plaisir à transmettre</em> mon savoir et à former. En tant qu'infirmier référent en endosciopie digestive et infirmier conseil chez Isis diabète, j'ai  pu <em>m'exercer à la formation</em>, au suivi des nouvelles recrues et à l'évaluation de leurs connaissances. Former les nouveaux arrivants est enrichissant tout aussi bien pour l'apprenant que pour le formateur.</p>
                                <br />
                                <br />
                                <br />
                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />De <em>nature curieuse</em>, il m'a toujours tenu à coeur de faire évoluer mes connaissances. Lors de mon parcours, notamment chez Isis Diabète, mon implication dans mon exercice m'a permis d'acquerir de solides <em>compétences techniques</em>, <em>reconnues par le corps médical</em> (hôpital St Antoine et St Joseph à Paris) et par <em>mes pairs</em>. </p>
                                <br />
                                <br />

                                <p className="fourText"> <img src={logoIsis} className="logoArrow" />En tant qu'infirmier coordinateur j'ai participé à l'<em>élaboration et à l'application de différents protocoles </em> mais aussi veiller à leurs <em>mise en place</em> à l'hôpital. Par exemple, à l'hopital Montsouris, la création du protocole, "patient debout", permettait à un patient d'aller au bloc opératoire debout et non plus sur un branquart pour diminuer le stress pré-opératoire du patient. Mon côté <em>diplomate</em> m'est utile pour assurer la bonne adoption et compréhension de ces nouvelles pratiques par les équipes.</p>
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" />
                                    Les quatre années d'exercice <em> en tant qu'IC chez Isis Diabète</em> m'a permis d'acquérir un certain nombre de connaissances pour valoriser<em>l'écoute</em> des problématiques terrains et être une <em>force de proposition</em> pour <em>solutionner</em> ces éléments bloquants.</p>
                                <br />
                                <br />

                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />Ma faculté à avoir une <em>aisance orale</em> et de posséder un savoir et des <em>compétences en informatiques</em> (logiciel de Suit Office et programmation-codage), me permettent de réaliser des exposées clairs sur des supports modernes permettant une meilleure transmission des informations.</p>
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
