import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
  document.getElementById('root')
);


reportWebVitals();
