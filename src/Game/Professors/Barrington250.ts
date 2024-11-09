import image from '../../Assets/Barrington.jpeg';
import AStar from '../Moves/AStar';
import Exam from '../Moves/Exam';
import PackOfDogs from '../Moves/PackOfDogs';
import RecursiveRampage from '../Moves/RecursiveRampage';

const prof = {
    name: "David Barrington",
    attack: 80,
    maxHealth: 250,
    defense: 80,
    moves: [Exam, RecursiveRampage, AStar, PackOfDogs],
    picture: image,
    id: 1,
}

export default prof;