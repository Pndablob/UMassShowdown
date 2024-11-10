import Professor from "./Professor";

interface Move {
    name: string;
    power: number;
    critChance?: number;
    critMultiplier?: number;
    healing?: number;
}

export default Move;