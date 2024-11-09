class Player {
    private professors: Array<Professor>;

    constructor(professors: Array<Professor>, levels: Array<number>) {
        this.professors = professors;
    }

    public getProfessors(): Array<Professor> {
        return this.professors;
    }
}