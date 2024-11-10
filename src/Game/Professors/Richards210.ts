import image from "../../Assets/Richards.jpeg";
import Exam from "../Moves/Exam";
import SortingStrike from "../Moves/SortingStrike";
import AVLShuriken from "../Moves/AVLShuriken";

const prof = {
    name: "Timothy Richards",
    attack: 60,
    maxHealth: 210,
    defense: 70,
    moves: [Exam, SortingStrike, AVLShuriken],
    picture: image,
    id: 13,
}

export default prof;