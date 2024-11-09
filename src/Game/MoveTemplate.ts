import Battle from "./Battle";

interface Move {
    name: string;
    power: number;
    callback: (battle: Battle)=>void|undefined;
}

export default Move;