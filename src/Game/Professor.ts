class Professor {
    private name: string;
    private health: number;
    private moves: Array<Move>;
    private picture: string;


    constructor(name: string, health: number, moves: Array<Move>, picture: string) {
        this.name = name;
        this.health = health;
        this.moves = moves;
        this.picture = picture;
    }
    
    public getName(): string {
        return this.name;
    }

    public getHealth(): number {
        return this.health;
    }

    public getMoves(): Array<Move> {
        return this.moves;
    }

    public getPicture(): string {
        return this.picture;
    }

    public setHealth(health: number) {
        this.health = health;
    }

    public setMove(moves: Array<Move>) {
        this.moves = moves;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setPicture(picture: string) {
        this.picture = picture;
    }

    public takeDamage(damage: number) {
        this.health -= damage;
    }
}