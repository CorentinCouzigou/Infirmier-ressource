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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />L'infirmier ressource est le <em>garant des bonnes pratiques</em>. Il a pour mission <em>l'uniformisation des pratiques</em> afin de garantir la meilleure prise en charge patient. Il doit évaluer fréquemment les pratiques de chacun, proposer des axes d'améliorations et vérifier la bonne évolution de ces pratiques. Ces actions ont pour objectif  de garantir un niveau d'excellence pour le patient même lorsque ses suivis thérapeutiques sont réalisés par differents infirmiers conseils. </p>
                                <br />
                                <br />
                                <br />
                                <p className="secondText"><img src={logoIsis} className="logoArrow" /> L'infirmier ressource a pour rôle d'aider au <em>recrutement</em> de nouveaux infirmiers conseils. Il veille à la bonne <em>intégration des nouveaux arrivants</em> dans une équipe. Il contribue à la formation des nouvelles recrues, il suit leurs évolutions et garanti toute l'aide nécessaire pour faciliter cette apprentissage. Ce suivi permet d'assurer à l'infirmier arrivant d'être à l'aise sur le terrain, mais également d'assurer un niveau de prise en charge optimal des patients.</p>
                                <br />
                                <br />


                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />L'infirmier ressource se doit etre doté d'un <em>esprit curieux </em>pour ainsi être toujours à la pointe en matière de connaissance technique. Remettre en question ses acquis et vouloir toujours aller chercher plus loin pour ainsi apporter un maximum de solutions en cas de problèmatiques.</p>
                                <br />
                                <br />


                                <p className="fourText"> <img src={logoIsis} className="logoArrow" /> L'infirmier ressource ayant un <em>role pivot</em> il a pour mission de <em>veillier à l'application et à la création des "process"</em> de l'entreprise. Ainsi il a pour charge de distiler la bonne compréhension de ces pratiques aux équipes et leurs bonnes utilisations sur le terrain. </p>
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
                                <p className="firstText"><img src={logoIsis} className="logoArrow" />Au cours de ma carrière, j'ai déjà eu l'a chance d'<em>excercer des rôles à responsabilités</em>, notamment lors en tant qu'infirmier coordinateur de l'unité de chirurgie ambulatoire et d'infirmier référent de la salle d'endoscopie digestive interventionnelle . L'une de mes missions premières était le respect de la qualité des prises en charge et de vérifier l'implication des équipes soignantes aux différentes procédures. Etant en <em>adhéquation</em> avec la <em>politique patient d'Isis Diabete</em>, il me tient à coeur de garantir cette derniere. </p>
                                <br />
                                <br />
                                <p className="secondText"> <img src={logoIsis} className="logoArrow" />J'ai toujours eu un <em>plaisir à transmettre</em> mon savoir et à former. En tant qu'infirmier référent en endosciopie digestive et infirmier conseil chez Isis diabeteque, j'ai  pu <em>m'exercer à la formation</em>, au suivi des nouvelles recrues et à l'évaluation de leurs connaissances. Former les nouveaux arrivants est enrichissant tout aussi bien pour l'apprenant que pour le formateur.</p>
                                <br />
                                <br />
                                <br />
                                <p className="threeText"> <img src={logoIsis} className="logoArrow" />Ayant une <em>nature curieuse</em> il m'a toujours tenu à coeur de faire évoluer mes connaissances. Lors de mon parcours, notamment chez Isis Diabete, mon implication dans mon exercice m'a permis d'acquerir des solites <em>compétences techniques</em>, <em>reconnues par le corps médical</em> (hôpital St Antoine et St Joseph à Paris) et par <em>mes pairs</em>. </p>
                                <br />
                                <br />

                                <p className="fourText"> <img src={logoIsis} className="logoArrow" />En tant qu'infirmier coordinateur j'ai déjà pu participer à l'<em>élaboration ou l'application de différents protocoles </em> mais aussi veiller à la <em>mise en place</em> des différentes <em>procédures</em> mis en place à l'hôpital. J'ai notamment pu aider à l'élaboration et à la mise d'une nouvelle pratique à l'hôpital Montsouris "le patient debout"; permettant à un patient d'aller au bloc opératoire debout et non plus sur un branquart et ainsi diminuer le stress pré-opératoire du patient. Mon côté <em>diplomate</em> m'est utile pour permettre la bonne adoption et compréhension de ces nouvelles pratiques par les équipes.</p>
                                <br />
                                <br />

                                <p className="fiveText"> <img src={logoIsis} className="logoArrow" />
                                    Mon exercice de <em>quatre années en tant qu'IC chez Isis Diabete</em> m'a permis d'acquerir un certains nombre de connaissances. Ces dernieres me permettent d'être à <em>l'écoute</em> des problématiques terrain et d'être une <em>force de proposition</em> pour <em>solutioner</em> ces éléments bloquants.</p>
                                <br />
                                <br />

                                <p className="sixText"> <img src={logoIsis} className="logoArrow" />Ma faculté à avoir une <em>aisance orale</em> et de posséder un savoir et des <em>compétences en informatiques</em>, me permettent de réaliser des exposées clairs sur des supports modernes permettant une meilleure transmission des informations.</p>
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
