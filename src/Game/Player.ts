class Player {
    private professors: Array<Professor>;
    private levels: Array<number>;

    constructor(professors: Array<Professor>, levels: Array<number>) {
        this.professors = professors;
        this.levels = levels;
    }

    public getProfessors(): Array<Professor> {
        return this.professors;
    }
}