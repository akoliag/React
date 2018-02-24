//import './utils.js'
// import subtract, { square, add } from './utils.js'; //we need to import subtract this way as this is a default export not the named one
// console.log('app.js is running');
// console.log(square(4));
// console.log(add(4, 67));
// console.log(subtract(489, 67));

// import validator from 'validator'; //importing npm package after installing it 
// console.log(validator.isEmail('test'));
// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from Webpack</p>;
ReactDOM.render(template, document.getElementById('app'));