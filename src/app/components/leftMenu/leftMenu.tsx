import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { DASHBOARD_URI, DASHBOARD_LABEL, SETTINGS_LABEL, SETTINGS_URI } from '../../constants';

import './leftMenu.scss';

export const LeftMenu = () => {
  const history = useHistory();

  return (
    <div className="left-menu-container">
      <ul>
        <li><button onClick={() => history.push(DASHBOARD_URI)}>{DASHBOARD_LABEL}</button></li>
        <li><button onClick={() => history.push(SETTINGS_URI)}>{SETTINGS_LABEL}</button></li>
      </ul>
    </div>
  );
};
