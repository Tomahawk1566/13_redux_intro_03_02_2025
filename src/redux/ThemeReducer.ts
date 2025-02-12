import { ThemeAction } from './themeAction';

export interface InitialState {
    value:'light'|'dark'
}
const initialState: InitialState = {
    value:'light'
}
export default function themeReducer(state:InitialState=initialState,action:ThemeAction){
    switch (action.type) {
        case 'change':
            return {...state, value: action.payload ? 'light' : 'dark' };
    
        default:
            return state;
    }
    
}