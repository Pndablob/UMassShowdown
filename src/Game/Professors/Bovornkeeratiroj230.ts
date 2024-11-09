import image from "../../Assets/Bovornkeeratiroj.jpeg";
import BinaryBarrage from "../Moves/BinaryBarrage";
import Exam from "../Moves/Exam";
import Homework from "../Moves/Homework";
import PettingZoo from "../Moves/PettingZoo";

const prof = {
    name: "Nikko Bovornkeeratiroj",
    attack: 60,
    maxHealth: 230,
    defense: 90,
    moves: [Exam, Homework, BinaryBarrage, PettingZoo],
    picture: image,
    id: 2,
}

export default prof;