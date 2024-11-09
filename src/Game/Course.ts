import Professor from './Professor';

class Course {
    private professorList: Array<Professor>;
    private courseNumber: string;

    constructor(professorList: Array<Professor>, courseNumber: string) {
        this.professorList = professorList;
        this.courseNumber = courseNumber;
    }

    public getProfessors(): Array<Professor> {
        return this.professorList;
    }

    public getCourseNumber(): string {
        return this.courseNumber;
    }
}

export default Course;
