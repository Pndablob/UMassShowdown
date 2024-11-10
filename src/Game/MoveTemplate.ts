import Professor from "./Professor";

interface Move {
    name: string;
    power: number;
    critChance?: number;
    critMultiplier?: number;
    healing?: number;
    selfHarm?: number;
}

export default Move;