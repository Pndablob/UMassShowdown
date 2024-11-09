class Move {
    private name: string;
    private power: number;

    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }

    public getName(): string {
        return this.name;
    }

    public getPower(): number {
        return this.power;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setPower(power: number) {
        this.power = power;
    }
}

export default Move;