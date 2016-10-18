import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchOffers } from './actions';
import rootReducer from './reducers';


import App from './components/App';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const history = syncHistoryWithStore(browserHistory, store);

function run () {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
        </Route>
      </Router>
    </Provider>, document.getElementById('app'));
}


function init () {
  run();
  store.dispatch(fetchOffers());
}


init();
