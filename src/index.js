import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppState from './context/app/AppState';
import FavouriteState from './context/favourite/FavouriteState';

const app = (
  <AppState>
    <FavouriteState>
      <App/>
    </FavouriteState>
  </AppState>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
