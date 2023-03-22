import { createStore, Store } from "redux";
import UserModel from "../Models/UserModel";
import { gradesStore } from "./GradesState";



// 1
export class AuthorisationState {
    user: UserModel | null = null;
}


// 2
export enum AuthorisationActionType {
    Login,
    Logout
}


//3
export interface AuthorisationAction {
    type: AuthorisationActionType,
    payload?: any
}


//4
export function loginAction(authorisation: UserModel): AuthorisationAction {
    return {type: AuthorisationActionType.Login, payload: authorisation};
}

export function logOutAction(): AuthorisationAction {
    return {type: AuthorisationActionType.Logout};
}


//5
export function authorisationReducer(currentState: AuthorisationState = new AuthorisationState(), action: AuthorisationAction): AuthorisationState {

    const newState: AuthorisationState = {...currentState};
   switch (action.type) {
    case AuthorisationActionType.Login:
        newState.user = action.payload;
        break;
    case AuthorisationActionType.Logout:
        newState.user = null;
        
        break;
    }
    return newState;
}

// 6
export const authorisationStore = createStore(authorisationReducer);



