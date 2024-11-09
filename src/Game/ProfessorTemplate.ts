import Move from "./Move";

interface ProfessorTemplate {
    name: string;
    attack: number;
    health: number;
    maxHealth: number;
    moves: Array<Move>;
    picture: string;
}

export default ProfessorTemplate;