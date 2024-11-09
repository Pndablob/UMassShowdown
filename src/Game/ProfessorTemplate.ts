import Move from "./MoveTemplate";

interface ProfessorTemplate {
    name: string;
    attack: number;
    health: number;
    maxHealth: number;
    moves: Move[];
    picture: string;
    id: number;
}

export default ProfessorTemplate;
