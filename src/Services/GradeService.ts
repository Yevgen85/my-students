import axios from "axios";
import appConfig from "../Configuration/Config";
import GradeModel from "../Models/GradeModel";
import { getFetchAction, gradesStore } from "../Redux/GradesState";

class GradeService {
    async getGrades(): Promise<GradeModel[]> {
        if(gradesStore.getState().gradesList.length === 0) {
            const response = await axios.get<GradeModel[]>(appConfig.apiAddress + 'grades/');
            gradesStore.dispatch(getFetchAction(response.data));
            console.log(response);
            console.log('APICall getAll');
            return response.data;
        }
        return gradesStore.getState().gradesList;
    }
}

const gradeService = new GradeService();
export default gradeService;