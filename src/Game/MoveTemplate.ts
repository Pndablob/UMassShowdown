import Battle from "./Battle";

interface Move {
    name: string;
    power: number;
    critChance?: number;
    critMultiplier?: number;
    accuracy?: number;
    callback?: (battle: Battle)=>void;
}

export default Move;