import React from 'react';
import ReactDOM from 'react-dom';
import NavigationManager from './routing'
import RegisterSW from './functionality/swregistration'

ReactDOM.render(
  <React.StrictMode>
    <NavigationManager />
  </React.StrictMode>,
  document.getElementById('root')
);
RegisterSW();
