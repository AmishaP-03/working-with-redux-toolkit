import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true
};

/**
 * Prepare a slice of the global state, contains related data
 */
const counterSlice = createSlice({
    name: "counter", // Every slice needs a name, unique to that group of data
    initialState: initialCounterState,
    reducers: { // an object containing all the reducer functions required by this slice. Each func will be called by redux and the current state (and action) will be passed to the automatically
        increment(state, action) {
            // Seemingly we are allowed to mutate state here. But we cannot actually mutate state. Redux tollkit internally used another package called imgur, which will detect code
            // like this and will automatically clone the existing state, create a new state object and override the state which we are editing in an immutable way.
            state.counter += action.payload;
        },
        decrement(state) { // we don't mention action in the arguement since it is not required in the logic
            state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// createSlice automatically creates unique action identifiers for our different reducers
// counterSlice.actions -> object full of keys which match the method name specified in reducer object
// counterSlice.actions.increment() -> returns an action object of this shape: {type: 'some auto generated unique identifiers'}
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;