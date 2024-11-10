import image from '../../Assets/Swanier.jpeg';

import Homework from '../Moves/Homework';
import OfficeHours from '../Moves/OfficeHours';
import Exam from '../Moves/Exam';

const prof = {
    name: "Cheryl Swanier",
    attack: 50,
    maxHealth: 175,
    defense: 50,
    moves: [Homework, OfficeHours, Exam],
    picture: image,
    id: 18,
}

export default prof;