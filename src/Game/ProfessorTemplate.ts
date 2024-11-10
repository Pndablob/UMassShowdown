import Move from "./MoveTemplate";

interface ProfessorTemplate {
    name: string;
    attack: number;
    maxHealth: number;
    defense: number;
    moves: Move[];
    picture: string;
    id: number;
}

export default ProfessorTemplate;
