class Course {
    private professorList: Array<Professor>;
    private courseNumber: number;

    constructor(professorList: Array<Professor>, courseNumber: number) {
        this.professorList = professorList;
        this.courseNumber = courseNumber;
    }

    public getProfessors(): Array<Professor> {
        return this.professorList;
    }

    public getCourseNumber(): number {
        return this.courseNumber;
    }
}

export default Course;