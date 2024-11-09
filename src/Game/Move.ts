class Move {
    private name: string;
    private damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public getName(): string {
        return this.name;
    }

    public getDamage(): number {
        return this.damage;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setDamage(damage: number) {
        this.damage = damage;
    }
}

export default Move;