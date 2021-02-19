import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer, appTaskReducer } from './reducers/appReducer';
import { Action, ActionTask } from './actions/appAction';
import { createLogger } from 'redux-logger';

// export default function configureStore(preloadedState: any): any {
//   const middlewares = [thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);

//   const store = createStore(appReducer, preloadedState, composedEnhancers);

//   return store;
// }

const loggerMiddleware = createLogger();
const middleware = [thunk as ThunkMiddleware<AppState, RootAction>];

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}

const RootReducer = combineReducers({
  mode: appReducer,
  tasks: appTaskReducer,
});
export type AppState = ReturnType<typeof RootReducer>;

type RootAction = Action & ActionTask;

export const store = createStore(RootReducer, applyMiddleware(...middleware));

// export const store = createStore(
//   RootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk as ThunkMiddleware<AppState, RootAction>)
//   )
// );

// import { createStore, applyMiddleware } from 'redux';
// import { appReducer } from './reducers/appReducer';
// import thunkMiddleware from 'redux-thunk';
// export const store = createStore(appReducer);
