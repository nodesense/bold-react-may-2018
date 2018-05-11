// bootstrap react app into browser


// node_modules
import React from 'react';
import {render} from 'react-dom';

import {App} from './app/App';

// Virtual DOM ==> REAL DOM
// diffing, patching
render(<App />,  //virtual dom
       document.getElementById('root') //real dom
)
