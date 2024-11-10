import Move from "./MoveTemplate";

interface ProfessorTemplate {
    name: string;
    attack: number;
    maxHealth: number;
    defense: number;
    speed?: number;
    moves: Move[];
    picture: string;
    id: number;
}

export default ProfessorTemplate;
