import CourseModel from "./CourseModel";
import StudentModel from "./StudentModel";

interface GradeModel {
    id: number,
    course: CourseModel,
    student: StudentModel,
    score: string,
    
}

export default GradeModel;