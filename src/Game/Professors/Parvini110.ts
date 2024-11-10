import image from '../../Assets/Parvini.jpeg';
import Exam from '../Moves/Exam';
import Intractability from '../Moves/Intractability';
import RecursiveRampage from '../Moves/RecursiveRampage';

const prof = {
    name: "Ghazaleh Parvini",
    attack: 50,
    maxHealth: 160,
    defense: 60,
    moves: [Exam, RecursiveRampage, Intractability],
    picture: image,
    id: 19,
}

export default prof;