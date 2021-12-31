import { connect } from 'react-redux';
import { fetchPeopleList } from '../../actions';
import { State } from '../../reducers';
import { PeoplePage, PeoplePageDataProps, PeoplePageMethodsProps } from './peoplePage';

export const mapStateToPropsPeoplePage  = (state: State): PeoplePageDataProps => ({
  people: state.peopleReducer.people,
  loggedUser: state.loginReducer.authed,
})

export const mapDispatchToPropsPeoplePage = (dispatch: any): PeoplePageMethodsProps => {
  const res = {
    fetchPeople: () => {
      dispatch(fetchPeopleList());
    },
  };

  return res;
};

export const PeoplePageContainer = connect(mapStateToPropsPeoplePage, mapDispatchToPropsPeoplePage)(PeoplePage);
