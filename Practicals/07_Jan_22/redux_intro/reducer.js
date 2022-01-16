import { INC_COUNT, DEC_COUNT, ADD_TODO } from "./actionTypes.js";


export const reducer = (state, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return { ...state, counter: state.counter + payload };
    case DEC_COUNT:
      return { ...state, counter: state.counter - payload };
    case ADD_TODO:
      return { ...state, todo: [...state.todo, payload] };

    default:
      return state;
  }
};
