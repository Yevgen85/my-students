import { createStore, Store } from "redux";
import StudentModel from "../Models/StudentModel";


// 1
export class StudentsState {
    studentList: StudentModel[] = [];
}


// 2
export enum StudentActionType {
    FetchStudents,
    AddStudent,
    UpdateStudent,
    DeleteStudent,
}


//3
export interface StudentAction {
    type: StudentActionType,
    payload: any
}


//4
export function getFetchAction(studentList: StudentModel[]): StudentAction {
    return {type: StudentActionType.FetchStudents, payload: studentList};
}


//5
export function studentsReducer(currentState: StudentsState = new StudentsState(), action: StudentAction): StudentsState {

    const newState: StudentsState = {...currentState};
    console.log(action.type);
    switch (action.type) {
        case StudentActionType.FetchStudents:
            newState.studentList = action.payload;
            break;
        case StudentActionType.AddStudent:
            newState.studentList.push(action.payload);
            break;
        case StudentActionType.UpdateStudent:
            const indexToUpdate = newState.studentList.findIndex(student => student.id === action.payload.id);
            newState.studentList[indexToUpdate] = action.payload;
            break;
        case StudentActionType.DeleteStudent:
            const indexToDelete = newState.studentList.findIndex(student => student.id === action.payload);
            newState.studentList.splice(indexToDelete, 1);
            break;
    }

    return newState;
    
}

// 6
export const studentsStore = createStore(studentsReducer);



