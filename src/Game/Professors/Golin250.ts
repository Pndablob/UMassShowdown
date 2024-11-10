import image from '../../Assets/Golin.jpeg';
import ClassQuestion from '../Moves/ClassQuestion';
import SortingStrike from '../Moves/SortingStrike';
import Induction from '../Moves/Induction';
import Exam from '../Moves/Exam';

const prof = {
    name: "Mordecai Golin (250)",
    attack: 70,
    maxHealth: 250,
    defense: 80,
    moves: [Induction, SortingStrike, ClassQuestion, Exam],
    picture: image,
    id: 6,
};

export default prof;