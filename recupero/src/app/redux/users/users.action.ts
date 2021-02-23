
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/interfaces/user.interface';

export const saveCurrentUser = createAction('[Users] save current', props<{user: User}>());

export const initUsers = createAction('[Users] init users', props<{users: User[]}>());
export const insertUser = createAction('[Users] insert', props<{user: User}>());

export const retrieveAllUsers =  createAction('[Users] retrieve all users');
export const postUser = createAction('[User] add to server', props<{user: User}>());