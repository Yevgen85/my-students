import axios from "axios";
import appConfig from "../Configuration/Config";
import CourseModel from "../Models/CourseModel";
import { courseStore, getFetchAction } from "../Redux/CoursesState";


class CourseService {
    async getCourses(): Promise<CourseModel[]> {
        if(courseStore.getState().courseList.length === 0) {
            const response = await axios.get<CourseModel[]>(appConfig.apiAddress + 'courses/');
            courseStore.dispatch(getFetchAction(response.data));
            console.log(response);
            console.log('APICall getAll');
            return response.data;
        }
        return courseStore.getState().courseList;
    }
}

const courseService = new CourseService();
export default courseService;

