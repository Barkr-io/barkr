import React from 'react';
import App from './App.jsx';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom'

render (
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);
