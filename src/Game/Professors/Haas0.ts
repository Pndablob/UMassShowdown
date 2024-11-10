import image from '../../Assets/Haas.jpeg';
import Abstraction from '../Moves/Abstraction';
import IBMFellow from '../Moves/IBMFellow';
import AcademicProbation from '../Moves/AcademicProbation';
import Sleep from '../Moves/Sleep';

const prof = {
    name: "Laura Haas",
    attack: 75,
    maxHealth: 150,
    defense: 40,
    moves: [IBMFellow, Abstraction, AcademicProbation, Sleep],
    picture: image,
    id: 17,
}

export default prof;