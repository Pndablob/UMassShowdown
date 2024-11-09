import ProfessorTemplate from "./ProfessorTemplate";

class Course {
    private professorList: Array<ProfessorTemplate>;
    private courseNumber: string;

    constructor(professorList: Array<ProfessorTemplate>, courseNumber: string) {
        this.professorList = professorList;
        this.courseNumber = courseNumber;
    }

    public getProfessors(): Array<ProfessorTemplate> {
        return this.professorList;
    }

    public getCourseNumber(): string {
        return this.courseNumber;
    }
}

export default Course;
