import Battle from "./Battle";

interface Move {
    name: string;
    power: number;
    callback?: (battle: Battle)=>void;
}

export default Move;