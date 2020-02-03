import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
