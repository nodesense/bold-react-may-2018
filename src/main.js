// bootstrap react app into browser


// node_modules
import React from 'react';
import {render} from 'react-dom';

import {App} from './app/App';

import store from "./app/store";
import {Provider} from 'react-redux';

// Virtual DOM ==> REAL DOM
// diffing, patching
render( (
        <Provider store={store}>
             <App />
        </Provider>
    ),
       document.getElementById('root') //real dom
)
