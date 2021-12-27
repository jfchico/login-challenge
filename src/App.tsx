import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { LoginPageContainer, PeoplePageContainer, PlanetsPageContainer } from './app/pages';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LoginPageContainer} />
        <Route path="/people" component={PeoplePageContainer} />
        <Route path="/planets" component={PlanetsPageContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
