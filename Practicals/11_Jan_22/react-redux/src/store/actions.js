import { DEC_COUNTER, INC_COUNTER} from "./actionTypes.js";

export const incCounter = (data) => ({
    type: INC_COUNTER,
    payload: data
})


export const decCounter = (data) => ({
    type: DEC_COUNTER,
    payload: data
})