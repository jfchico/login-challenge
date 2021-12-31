import { PeopleState } from './peopleReducer'
import { PlanetsState } from './planetsReducer';
import { LoginState } from './loginReducer';

export interface GeneralState {
  peopleReducer: PeopleState,
  planetsReducer: PlanetsState,
  loginReducer: LoginState,
}

export type State = GeneralState;