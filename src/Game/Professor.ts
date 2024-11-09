class Professor {
    private name: string;
    private id: number;
    private health: number;
    private moves: Array<Move>;
    private picture: string;


    constructor(name: string, id: number, health: number, moves: Array<Move>, picture: string) {
        this.name = name;
        this.id = id;
        this.health = health;
        this.moves = moves;
        this.picture = picture;
    }
    
    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
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

    public setId(id: number) {
        this.id = id;
    }

    public setPicture(picture: string) {
        this.picture = picture;
    }

    public takeDamage(damage: number) {
        this.health -= damage;
    }
}