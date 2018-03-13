import { createStore} from 'redux';

const store = createStore((state = {count: 0 } ) => {
    return state;
});

//store.getState(); returns the current state
//createStore always requires a function as an argument: the first argument to this function is state (current state)

console.log(store.getState());