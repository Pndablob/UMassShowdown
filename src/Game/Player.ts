import ProfessorTemplate from './Professor';

class Player {
    private professors: ProfessorTemplate[];

    constructor(professors: ProfessorTemplate[]) {
        this.professors = professors;
    }

    public getProfessors(): ProfessorTemplate[] {
        return this.professors;
    }
}

export default Player;
