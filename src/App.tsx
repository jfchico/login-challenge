import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { LoginPageContainer, PeoplePageContainer } from './app/pages';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LoginPageContainer} />
        <Route path="/people" component={PeoplePageContainer} />
        <Route path="/planets" component={PeoplePageContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
