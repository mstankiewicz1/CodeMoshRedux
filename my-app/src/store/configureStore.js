import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';

export default function() {
    return configureStore({ reducer });
};