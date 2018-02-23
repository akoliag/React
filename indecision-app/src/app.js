//import './utils.js'
import subtract, { square, add } from './utils.js'; //we need to import subtract this way as this is a default export not the named one
console.log('app.js is running');
console.log(square(4));
console.log(add(4, 67));
console.log(subtract(489, 67));