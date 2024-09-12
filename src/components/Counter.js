import { useDispatch, useSelector } from 'react-redux'; // custom hooks provided by react-redux
import classes from './Counter.module.css';
import { counterActions } from '../store/redux.js';

const Counter = () => {
  /**
   * Function called by react-redux. Current state value is passed to it and we make it return the counter value from the state.
   * 
   * When we use this function, react-redux will automatically set up a subscription to redux store for this component. Thus, this
   * component will be updated/re-executed i.e it will receive the latest value of the store whenever the counter state changes.
   * 
   * When this component is unmounted from the DOM, react-redux will automatically clear this subscription for us
   */
  const counter = useSelector(state => state.counter.counter);

  const showCounter = useSelector(state => state.counter.showCounter);

  /**
   * Function which will dispatch our action to the redux store
   */
  const dispatchFunction = useDispatch();

  function handleIncrement() {
    dispatchFunction(counterActions.increment(1)); // {type: 'SOME_UNIQUE_IDENTIFIER_AUTO_GENERATED_BY_REDUX_TOOLKIT', payload: 1}
  }

  function handleIncrementByFive() {
    dispatchFunction(counterActions.increment(5));
  }

  function handleDecrement() {
    dispatchFunction(counterActions.decrement());
  }

  function handleToggle() {
    dispatchFunction(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      {showCounter && <h1>Redux Counter</h1>}
      {showCounter && <div className={classes.value}>{counter}</div>}
      {showCounter && <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementByFive}>Increment by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>}
      <button onClick={handleToggle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
