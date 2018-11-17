/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import './styles/App.css';
import 'font-awesome/css/font-awesome.css'

import App from './App';
import {unregister} from './registerServiceWorker'
import { Provider } from 'react-redux'

import store, {history} from './configureStore'
import { withRouter, Router } from 'react-router-dom'
// import { ConnectedRouter as Router } from 'react-router-redux'
const env = process.env.NODE_ENV

const AppWithRouter = withRouter(App);

const router = (
    <Provider store={store}>
      <Router history={history}>
        <AppWithRouter />
      </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
unregister();
