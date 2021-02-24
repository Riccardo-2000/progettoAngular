import { ActionReducerMap } from "@ngrx/store";
import { usersReducer, UsersState } from "./users/users.reducers";


//interfaccia rappresentante lo stato globale
export interface AppState {
    usersState: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
    usersState: usersReducer
};