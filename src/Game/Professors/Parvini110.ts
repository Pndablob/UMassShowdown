import image from '../../Assets/Parvini.jpeg';
import Exam from '../Moves/Exam';
import ClassClash from '../Moves/ClassClash';
import OfficeHours from '../Moves/OfficeHours';

const prof = {
    name: "Ghazaleh Parvini",
    attack: 60,
    maxHealth: 160,
    defense: 60,
    moves: [Exam, ClassClash, OfficeHours],
    picture: image,
    id: 19,
}

export default prof;