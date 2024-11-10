import image from "../../Assets/Wilson.jpeg";
import Exam from "../Moves/Exam";
import NegativeCurve from "../Moves/NegativeCurve";
import BayesRule from "../Moves/BayesRuler";
import MarkovChain from "../Moves/MarkovChain";

const prof = {
    name: "Mark Wilson",
    attack: 100,
    maxHealth: 240,
    defense: 70,
    moves: [Exam, NegativeCurve, BayesRule, MarkovChain],
    picture: image,
    id: 15,
}

export default prof;