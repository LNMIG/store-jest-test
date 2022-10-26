import { configureStore } from '@reduxjs/toolkit';
import initialState from '../initialState/index';
import reducer from '../reducers/index.js';

export const store = configureStore(reducer, initialState);