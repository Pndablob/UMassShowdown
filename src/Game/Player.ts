import ProfessorTemplate from './Professor';

class Player {
    private professors: Array<ProfessorTemplate>;

    constructor(professors: Array<ProfessorTemplate>) {
        this.professors = professors;
    }

    public getProfessors(): Array<ProfessorTemplate> {
        return this.professors;
    }
}

export default Player;
