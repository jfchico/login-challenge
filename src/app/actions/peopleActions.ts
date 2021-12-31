import axios from 'axios';

import { PEOPLE_LIST_URL } from './api.endpoints';
import { FETCH_PEOPLE_LIST } from './actionsTypes';
import { PersonModel } from '../model';

export interface AddItemToCartType {
  type: string;
  payload: PersonModel[];
}

export const fetchPeopleList = () => {
  return (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    axios.get(PEOPLE_LIST_URL).then(
      res => {
        dispatch (
          {
            type: FETCH_PEOPLE_LIST,
            payload: res.data,
          }
        );
      }
    )
  };
};
