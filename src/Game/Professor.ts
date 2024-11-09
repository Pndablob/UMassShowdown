import Move from "./Move";
import ProfessorTemplate from "./ProfessorTemplate";

class Professor {
    private name: string;
    private attack: number;
    private health: number;
    private maxHealth: number;
    private moves: Array<Move>;
    private picture: string;


    constructor(template: ProfessorTemplate) {
        this.name = template.name;
        this.attack = template.attack;
        this.health = template.health;
        this.maxHealth = template.health;
        this.moves = template.moves;
        this.picture = template.picture;
    }
    
    public getName(): string {
        return this.name;
    }

    public getAttack(): number {
        return this.attack;
    }

    public getHealth(): number {
        return this.health;
    }

    public getMaxHealth(): number {
        return this.maxHealth;
    }

    public getMoves(): Array<Move> {
        return this.moves;
    }

    public getPicture(): string {
        return this.picture;
    }

    public setAttack(attack: number) {
        this.attack = attack;
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

export default Professor;