import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/index.js';

export const store = configureStore({ reducer });