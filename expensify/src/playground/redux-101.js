import { createStore} from 'redux';


const store = createStore((state = { count: 0 }, action ) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + 1
        };
        case 'DECREMENT':
        return {
            count: state.count - 1
        };
        case 'RESET':
        return {
            count: 0
        };
        default:
            return state;
    }
    // if (action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1
    //     };
    // } else {
    //     return state;
    // }
});

//store.getState(); returns the current state
//createStore always requires a function as an argument: the first argument to this function is state (current state) and the second is action

console.log(store.getState());

//Action  - an object that gets sent to the store

//I'd like to increment the count 
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});
//we call the dispatch method and name out action (by convention uppercased)
console.log(store.getState());