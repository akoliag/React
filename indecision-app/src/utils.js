//EXPORT - default export - named exports because we export them by name

console.log('utils.js is running');
//export {square, add}; - one way of exporting
export const square = (x) => x * x ; //the second way of exporting - both are equally valid
export const add = (a,b) => a + b;