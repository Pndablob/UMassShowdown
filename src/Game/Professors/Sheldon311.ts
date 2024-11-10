import image from '../../Assets/Sheldon.jpeg';
import Exam from '../Moves/Exam';
import Intractability from '../Moves/Intractability';
import DynamicPounding from '../Moves/DynamicPounding';
import BugOff from '../Moves/BugOff';

const prof = {
    name: "Daniel Sheldon",
    attack: 40,
    maxHealth: 311,
    defense: 70,
    moves: [Exam, Intractability, DynamicPounding, BugOff],
    picture: image,
    id: 14,
}

export default prof;