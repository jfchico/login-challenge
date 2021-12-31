import { combineReducers } from 'redux';
import { peopleReducer } from './peopleReducer';
import { planetsReducer } from './planetsReducer';
import { loginReducer } from './loginReducer';
import { State } from './reduxState.model';


export * from './peopleReducer';
export * from './planetsReducer';
export * from './loginReducer';
export * from './reduxState.model';


export const reducers =  combineReducers<State>({
  peopleReducer,
  planetsReducer,
  loginReducer,
});