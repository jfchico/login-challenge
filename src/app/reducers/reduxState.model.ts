import { PeopleState } from './peopleReducer'
import { PlanetsState } from './planetsReducer';

export interface GeneralState {
  peopleReducer: PeopleState,
  planetsReducer: PlanetsState,
}

export type State = GeneralState;