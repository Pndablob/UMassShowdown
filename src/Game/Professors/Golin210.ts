import image from '../../Assets/Golin.jpeg';
import Exam from '../Moves/Exam';
import HeapHammer from '../Moves/HeapHammer';
import SortingStrike from '../Moves/SortingStrike';
import UnionFind from '../Moves/UnionFiend';

const prof = {
    name: "Mordecai Golin (210)",
    attack: 55,
    maxHealth: 210,
    defense: 65,
    moves: [Exam, SortingStrike, HeapHammer, UnionFind],
    picture: image,
    id: 5,
};

export default prof;