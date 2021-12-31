import { connect } from 'react-redux';
import { fetchPlanetsList } from '../../actions';
import { State } from '../../reducers';
import { PlanetsPage, PlanetsPageDataProps, PlanetsPageMethodsProps } from './planetsPage';

export const mapStateToPropsPage  = (state: State): PlanetsPageDataProps => ({
  planets: state.planetsReducer.planets,
  loggedUser: state.loginReducer.authed,
});

export const mapDispatchToPropsPage = (dispatch: any): PlanetsPageMethodsProps => {
  const res = {
    fetchPlanets: () => {
      dispatch(fetchPlanetsList());
    },
  };

  return res;
};

export const PlanetsPageContainer = connect(mapStateToPropsPage, mapDispatchToPropsPage)(PlanetsPage);
