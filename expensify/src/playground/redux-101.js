import { createStore} from 'redux';


const store = createStore((state = { count: 0 }, action ) => {
    switch (action.type) {
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + incrementBy
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : -1;
        return {
            count: state.count - decrementBy
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
//createStore always requires a function as an argument: the first argument to this function is state (current state) and the second is an action

const unsubscribe = store.subscribe(() => {
//gets called every single time the store changes
console.log(store.getState());
});

//Action  - an object that gets sent to the store

//I'd like to increment the count 
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

//unsubscribe();//if we call unsubscribe right here it will print out only 1 change the rest will not get called

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
//we call the dispatch method and name out action (by convention uppercased)
