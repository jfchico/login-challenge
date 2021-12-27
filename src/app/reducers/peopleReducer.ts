import { PersonModel } from '../../model';

import { FETCH_PEOPLE_LIST } from '../actions/actionsTypes';


export interface PeopleState {
  people: PersonModel[];
}

export const initialPeopleState: PeopleState = {
  people: [],
}

export const peopleReducer = (state = initialPeopleState, action: { type: any; payload: any; }): PeopleState => {
  switch (action.type) {
    case FETCH_PEOPLE_LIST:
      return {
        ...state,
        people: mapPeopleResult(action.payload.results),
      };
    default:
      return state
  }
};

const mapPeopleResult = (result: any[]): PersonModel[] => {

  const people: PersonModel[] = [];
  result.forEach(person => {
    people.push({
      name: person.name,
      height: person.height,
      birth: person.birth_year,
      gender: person.gender,
    });
  })

  return people;
}
