import image from '../../Assets/Lan.jpeg';
import Abstraction from '../Moves/Abstraction';
import Exam from '../Moves/Exam';
import Homework from '../Moves/Homework';

const prof = {
    name: "Andrew Lan",
    attack: 90,
    maxHealth: 240,
    defense: 80,
    moves: [Homework, Exam, Abstraction],
    picture: image,
    id: 7,
}

export default prof;