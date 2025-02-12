import { ActionCounter } from "./counterAction"

export interface InitialState {
    value: number
}

const initialState: InitialState = {
    value: 0
}

export default function counterReducer(state = initialState, action: ActionCounter) {
    switch (action.type) {
        case "counter/change":
            return { ...state, value: state.value + action.payload }
        default:
            return state;
    }
}
