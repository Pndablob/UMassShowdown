import image from '../../Assets/Golin.jpeg';
import ClassQuestion from '../Moves/ClassQuestion';
import Exam from '../Moves/Exam';
import SortingStrike from '../Moves/SortingStrike';

const prof = {
    name: "Mordecai Golin (250)",
    attack: 70,
    maxHealth: 250,
    defense: 80,
    moves: [Exam, SortingStrike, ClassQuestion],
    picture: image,
    id: 6,
};

export default prof;