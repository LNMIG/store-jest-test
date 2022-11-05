import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import reducer from '../../reducers/index';

const store = configureStore({ reducer });
const history = createBrowserHistory()

const ProviderMock = props => {
    <Provider store={store}>
        <BrowserRouter history={history}>
            {props.children}
        </BrowserRouter>
    </Provider>
}
export default ProviderMock