import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import { ajax } from 'rxjs/ajax';

// epic: function that accepts a stream of actions and returns a stream of actions
// - define one epic for each action in the redux store you want to react(rxjs) in
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics/index';


const browserHistory = createBrowserHistory();

function configureStore(deps = {}) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      ajax,
      ...deps
    }
  });

  const reducers = combineReducers({
    app: rootReducer,
    routing: routerReducer
  });

  const middlewares = [
    epicMiddleware,
    routerMiddleware(browserHistory)
  ];

  const defaultState = {};

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const configuredStore = createStore(
    reducers,
    defaultState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
  epicMiddleware.run(rootEpic)
  return configuredStore
}

const store = configureStore()
// export const history = syncHistoryWithStore(browserHistory, store)
export const history = browserHistory;
if(module.hot){
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
