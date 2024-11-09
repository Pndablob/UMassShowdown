class Player {
    private professors: Array<Professor>;
    private levels: Array<number>; // levels unlocked by player

    constructor(professors: Array<Professor>, levels: Array<number>) {
        this.professors = professors;
        this.levels = levels;
    }

    public getProfessors(): Array<Professor> {
        return this.professors;
    }

    public getLevels(): Array<number> {
        return this.levels;
    }
}