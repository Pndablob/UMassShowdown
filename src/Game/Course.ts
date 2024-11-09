class Course {
    private professorList: Array<Professor>;
    private courseNumber: number;

    constructor(professorList: Array<Professor>, courseNumber: number) {
        this.professorList = professorList;
        this.courseNumber = courseNumber;
    }
}