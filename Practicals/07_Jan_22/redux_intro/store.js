import {createStore} from "redux";
import {reducer} from './reducer.js'
import {INC_COUNT, DEC_COUNT, ADD_TODO} from './actionTypes.js'

import {incCount} from "./actions.js"


class Store {
  constructor(reducer, init) {
    this.reducer = reducer;
    this.state = init;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);

  }
}

const incCountAction = {
  type: "INC_COUNT",
  payload: 1,
};

const decCountAction = {
  type: "DEC_COUNT",
  payload: 1,
};

const addTodoAction = {
  type: "ADD_TODO",
  payload: [],
};




const init = { counter: 10, todo: [] };

const store = createStore(reducer, init);

console.log(store.getState());
store.dispatch(incCount(100))
store.dispatch({ type: INC_COUNT, payload: 1 });
// store.dispatch(incCountAction); //same as above
console.log(store.getState());
store.dispatch({ type: DEC_COUNT, payload: 1 });
// store.dispatch(decCountAction); // same as above
console.log(store.getState());

store.dispatch({type: "ADD_TODO", payload: {title: 'learn redux', staus: false, id:2}})
console.log(store.getState());
 