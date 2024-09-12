import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.js';
import authReducer from './authentication.js';

// configureStore makes merging multiple reducers into one easier. It accepts a configuration object as input
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer} // these keys will be used while fetching data from store
});

export default store;