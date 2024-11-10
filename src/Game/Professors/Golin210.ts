import image from '../../Assets/Golin.jpeg';
import Exam from '../Moves/Exam';
import HeapHammer from '../Moves/HeapHammer';
import SortingStrike from '../Moves/SortingStrike';

const prof = {
    name: "Mordecai Golin",
    attack: 60,
    maxHealth: 210,
    defense: 70,
    moves: [Exam, SortingStrike, HeapHammer],
    picture: image,
    id: 5,
};

export default prof;