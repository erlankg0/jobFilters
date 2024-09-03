import {ADD_POSITIONS} from "./position-action";

export const positionsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            console.log(action.type, action.payload)
            return action.payload
        }
        default: {
            return state
        }
    }
}