import Move from "./MoveTemplate";
import ProfessorTemplate from "./ProfessorTemplate";

class Professor {
    private name: string;
    private attack: number;
    private health: number;
    private maxHealth: number;
    private moves: Move[];
    private picture: string;


    constructor(template: ProfessorTemplate) {
        this.name = template.name;
        this.attack = template.attack;
        this.health = template.health;
        this.maxHealth = template.health;
        this.moves = template.moves;
        this.picture = template.picture;
    }

    public attackOpponent(opponent: Professor, move: Move) {
        // calculate damage = power * attack * critical chance (1.25 modifier 10% of the time) * random modifier (0.85 - 1.0)
        let damage = move.power * this.attack * (Math.random() < 0.1 ? 1.25 : 1) * (Math.random() * 0.15 + 0.85);
        opponent.takeDamage(damage);
    }

    public takeDamage(damage: number) {
        this.health -= damage;
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

    public getMoves(): Move[] {
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

    public setMove(moves: Move[]) {
        this.moves = moves;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setPicture(picture: string) {
        this.picture = picture;
    }
}

export default Professor;