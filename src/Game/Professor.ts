import Move from "./MoveTemplate";
import ProfessorTemplate from "./ProfessorTemplate";

class Professor {
    private name: string;
    private attack: number;
    private health: number;
    private maxHealth: number;
    private defense: number;
    private moves: Move[];
    private picture: string;


    constructor(template: ProfessorTemplate) {
        this.name = template.name;
        this.attack = template.attack;
        this.health = template.maxHealth;
        this.maxHealth = template.maxHealth;
        this.defense = template.defense;
        this.moves = template.moves;
        this.picture = template.picture;
    }

    public attackOpponent(opponent: Professor, move: Move, crit: boolean) {
        // calculate damage = power * attack * critical chance (1.25 modifier 10% of the time) * random modifier (0.85 - 1.0) / defense
        let damage = move.power * this.attack * (crit ? (move.critMultiplier ? move.critMultiplier : 1.25) : 1) * (Math.random() * 0.15 + 0.85) / opponent.defense;
        opponent.takeDamage(damage);
    }

    public takeDamage(damage: number) {
        this.health -= damage;
    }

    public heal(heal: number) {
        this.health += heal;
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
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

    public getDefense(): number {
        return this.defense;
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

    public copy(): Professor {
        let prof = new Professor({
            name: this.name,
            attack: this.attack,
            maxHealth: this.maxHealth,
            defense: this.defense,
            moves: this.moves,
            picture: this.picture,
            id: -1,
        });
        prof.health = this.health;
        return prof;
    }
}

export default Professor;
