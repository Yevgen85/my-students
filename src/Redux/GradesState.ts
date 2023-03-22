import { createStore, Store } from "redux";
import GradeModel from "../Models/GradeModel";



// 1
export class GradesState {
    gradesList: GradeModel[] = [];
}


// 2
export enum GradeActionType {
    FetchGrades,
    AddGrade,
    UpdateGrade,
    DeleteGrade,
}


//3
export interface GradeAction {
    type: GradeActionType,
    payload: any
}


//4
export function getFetchAction(gradeList: GradeModel[]): GradeAction {
    return {type: GradeActionType.FetchGrades, payload: gradeList};
}


//5
export function gradesReducer(currentState: GradesState = new GradesState(), action: GradeAction): GradesState {

    const newState: GradesState = {...currentState};
    console.log(action.type);
    switch (action.type) {
        case GradeActionType.FetchGrades:
            newState.gradesList = action.payload;
            break;
        case GradeActionType.AddGrade:
            newState.gradesList.push(action.payload);
            break;
        case GradeActionType.UpdateGrade:
            const indexToUpdate = newState.gradesList.findIndex(grade => grade.id === action.payload.id);
            newState.gradesList[indexToUpdate] = action.payload;
            break;
        case GradeActionType.DeleteGrade:
            const indexToDelete = newState.gradesList.findIndex(grade => grade.id === action.payload);
            newState.gradesList.splice(indexToDelete, 1);
            break;
    }

    return newState;
    
}

// 6
export const gradesStore = createStore(gradesReducer);



