import { createStore, combineReducers } from 'redux';
import filtersReducer from './reducers/filters' 
import pisReducer from './reducers/filters' 
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'ДОБАВИТЬ':
      return { value: state.value + 1 };
    case 'ОТНЯТЬ':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;