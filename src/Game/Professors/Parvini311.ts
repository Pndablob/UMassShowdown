import image from '../../Assets/Parvini.jpeg';
import Exam from '../Moves/Exam';
import Intractability from '../Moves/Intractability';
import RecursiveRampage from '../Moves/RecursiveRampage';
import DivideAndConquer from '../Moves/DivideAndConquer';

const prof = {
    name: "Ghazaleh Parvini",
    attack: 70,
    maxHealth: 311,
    defense: 80,
    moves: [Exam, RecursiveRampage, Intractability, DivideAndConquer],
    picture: image,
    id: 11,
}

export default prof;