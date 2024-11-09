class Professor {
    private name: string;
    private id: number;
    private health: number;
    private attack: number;

    constructor(name: string, id: number, health: number, attack: number) {
        this.name = name;
        this.id = id;
        this.health = health;
        this.attack = attack;
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

    public getAttack(): number {
        return this.attack;
    }

    setHealth(health: number) {
        this.health = health;
    }

    setAttack(attack: number) {
        this.attack = attack;
    }

    setName(name: string) {
        this.name = name;
    }

    setId(id: number) {
        this.id = id;
    }

    takeDamage(damage: number) {
        this.health -= damage;
    }
}