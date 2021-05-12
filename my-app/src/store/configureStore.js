import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import func from './middleware/func';
import toast from './middleware/toast';
import api from './middleware/api';

export default function() {
    return configureStore({ 
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            // logger({ destination: 'console' }),
            toast,
            api
        ] 
    });
};