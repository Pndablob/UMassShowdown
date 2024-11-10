import image from '../../Assets/Haas.jpeg';
import Abstraction from '../Moves/Abstraction';
import IBMFellow from '../Moves/IBMFellow';
import AcademicProbation from '../Moves/AcademicProbation';

const prof = {
    name: "Laura Haas",
    attack: 90,
    maxHealth: 200,
    defense: 40,
    moves: [IBMFellow, Abstraction, AcademicProbation],
    picture: image,
    id: 17,
}

export default prof;