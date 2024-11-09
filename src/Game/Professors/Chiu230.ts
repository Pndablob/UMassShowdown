import image from '../../Assets/Chiu.jpeg';
import CIsAwesome from '../Moves/CIsAwesome';
import Exam from '../Moves/Exam';
import Snorlax from '../Moves/Snorlax';
import SystemSlam from '../Moves/SystemSlam';

const prof = {
    name: "Joe Chiu",
    attack: 90,
    maxHealth: 230,
    defense: 70,
    moves: [Exam, SystemSlam, Snorlax, CIsAwesome],
    picture: image,
    id: 3,
}

export default prof;