import ProfessorTemplate from "./ProfessorTemplate";

class Course {
    private professorList: ProfessorTemplate[];
    private courseNumber: string;

    constructor(professorList: ProfessorTemplate[], courseNumber: string) {
        this.professorList = professorList;
        this.courseNumber = courseNumber;
    }

    public getProfessors(): ProfessorTemplate[] {
        return this.professorList;
    }

    public getCourseNumber(): string {
        return this.courseNumber;
    }
}

export default Course;
