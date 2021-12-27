import axios from 'axios';

import { PLANETS_LIST_URL } from './api.endpoints';
import { FETCH_PLANETS_LIST } from './actionsTypes';

export const fetchPlanetsList = () => {
  return (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    axios.get(PLANETS_LIST_URL).then(
      res => {
        dispatch (
          {
            type: FETCH_PLANETS_LIST,
            payload: res.data,
          }
        );
      }
    )
  };
};