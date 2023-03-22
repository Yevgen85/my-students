import { createStore, Store } from "redux";
import CourseModel from "../Models/CourseModel";


// 1
export class CoursesState {
    courseList: CourseModel[] = [];
}


// 2
export enum CourseActionType {
    FetchCourses,
    AddCourse,
    UpdateCourse,
    DeleteCourse,
}


//3
export interface CourseAction {
    type: CourseActionType,
    payload: any
}


//4
export function getFetchAction(courseList: CourseModel[]): CourseAction {
    return {type: CourseActionType.FetchCourses, payload: courseList};
}


//5
export function courseReducer(currentState: CoursesState = new CoursesState(), action: CourseAction): CoursesState {

    const newState: CoursesState = {...currentState};
    console.log(action.type);
    switch (action.type) {
        case CourseActionType.FetchCourses:
            newState.courseList = action.payload;
            break;
        case CourseActionType.AddCourse:
            newState.courseList.push(action.payload);
            break;
        case CourseActionType.UpdateCourse:
            const indexToUpdate = newState.courseList.findIndex(course => course.id === action.payload.id);
            newState.courseList[indexToUpdate] = action.payload;
            break;
        case CourseActionType.DeleteCourse:
            const indexToDelete = newState.courseList.findIndex(course => course.id === action.payload);
            newState.courseList.splice(indexToDelete, 1);
            break;
    }

    return newState;
    
}

// 6
export const courseStore = createStore(courseReducer);



