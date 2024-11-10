import image from '../../Assets/Minea.jpeg';
import Abstraction from "../Moves/Abstraction";
import RecursiveRampage from '../Moves/RecursiveRampage';
import MariusExam from '../Moves/MariusExam';
import JavaScriptJab from '../Moves/JavaScriptJab';

const prof = {
    name: "Marius Minea",
    attack: 70,
    maxHealth: 220,
    defense: 60,
    moves: [Abstraction, RecursiveRampage, MariusExam, JavaScriptJab],
    picture: image,
    id: 9,
}

export default prof; 