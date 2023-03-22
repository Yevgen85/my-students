import axios from "axios";
import appConfig from "../Configuration/Config";
import StudentModel from "../Models/StudentModel";
import { getFetchAction, studentsStore } from "../Redux/StudentsState";

class StudentService {
    async getStudents(): Promise<StudentModel[]> {
        if(studentsStore.getState().studentList.length === 0) {
            const response = await axios.get<StudentModel[]>(appConfig.apiAddress + 'students/');
            studentsStore.dispatch(getFetchAction(response.data));
            console.log(response);
            console.log('APICall getAll');
            return response.data;
        }
        return studentsStore.getState().studentList;
    }
}

const studentService = new StudentService();
export default studentService;