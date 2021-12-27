import { ItemModel } from '../../model';

import { FETCH_PLANETS_LIST } from '../actions/actionsTypes';


export interface PlanetsState {
  planets: ItemModel[];
}

export const initialPlanetsState: PlanetsState = {
  planets: [],
}

export const planetsReducer = (state = initialPlanetsState, action: { type: any; payload: any; }): PlanetsState => {
  switch (action.type) {
    case FETCH_PLANETS_LIST:
      return {
        ...state,
        planets: action.payload,
      };
    default:
      return state
  }
};
