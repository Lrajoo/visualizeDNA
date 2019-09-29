import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Interface from './Containers/Interface/Interface';

import classes from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Interface/>
      </div>
    </BrowserRouter>
  );
}

export default App;
