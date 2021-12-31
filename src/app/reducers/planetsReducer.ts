import { PlanetModel } from '../model';
import { FETCH_PLANETS_LIST } from '../actions/actionsTypes';


export interface PlanetsState {
  planets: PlanetModel[];
}

export const initialPlanetsState: PlanetsState = {
  planets: [],
}

export const planetsReducer = (state = initialPlanetsState, action: { type: any; payload: any; }): PlanetsState => {
  switch (action.type) {
    case FETCH_PLANETS_LIST:
      return {
        ...state,
        planets: mapPeopleResult(action.payload.results),
      };
    default:
      return state
  }
};

const mapPeopleResult = (result: any[]): PlanetModel[] => {

  const planets: PlanetModel[] = [];
  result.forEach(planet => {
    planets.push({
      name: planet.name,
      climate: planet.climate,
      terrain: planet.terrain,
      population: planet.population,
      diameter: planet.diameter,
    });
  })

  return planets;
}