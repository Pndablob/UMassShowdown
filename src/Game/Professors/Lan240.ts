import image from '../../Assets/Lan.jpeg';
import BayesRuler from '../Moves/Abstraction';
import Exam from '../Moves/Exam';
import CountingCards from '../Moves/Homework';
import MarkovChain from '../Moves/MarkovChain';

const prof = {
    name: "Andrew Lan",
    attack: 90,
    maxHealth: 240,
    defense: 80,
    moves: [CountingCards, BayesRuler, MarkovChain, Exam],
    picture: image,
    id: 7,
}

export default prof;