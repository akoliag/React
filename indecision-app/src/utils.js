//EXPORT - default export - named exports because we export them by name

console.log('utils.js is running');
export {square, add, subtract as default }; //- one way of exporting
//export const square = (x) => x * x ; //the second way of exporting - both are equally valid
const square = (x) => x * x ;
const add = (a,b) => a + b;

//default export
const subtract = (a,b) => a - b;
//export default subtract; - another way of calling export default
//export default (a,b) => a - b; - another way of calling export default
//we can only export one value as a default one (or 0 or 1)
//we cannot call export default before a variable declaration