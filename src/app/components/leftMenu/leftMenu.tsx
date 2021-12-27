import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './leftMenu.scss';

export const LeftMenu = () => {
  const history = useHistory();

  return (
    <div className="left-menu-container">
      <ul>
        <li><button onClick={() => history.push('/people')}>People</button></li>
        <li><button onClick={() => history.push('/planets')}>Planets</button></li>
      </ul>
    </div>
  );
};
