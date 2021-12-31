import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { LoginPageContainer, PeoplePageContainer, PlanetsPageContainer } from './app/pages';
import { DASHBOARD_URI, SETTINGS_URI, LOGIN_URI } from './app/constants';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={LOGIN_URI} component={LoginPageContainer} />
        <Route path={DASHBOARD_URI} component={PeoplePageContainer} />
        <Route path={SETTINGS_URI} component={PlanetsPageContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
