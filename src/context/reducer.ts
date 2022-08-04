
import { InitialStateProps, LoginProps } from '../interfaces/context/AppContextProvider';

type TypeActions = |
{
    type: 'setLogin',
    payload: LoginProps
}
    | { type: 'removeLogin', payload: LoginProps } | { type: 'addStates', payload: Array<{}> };

export const todoReducer = (state: InitialStateProps, action: TypeActions) => {
    switch (action.type) {
        case 'setLogin':
            return { ...state, login: action.payload }
        case 'removeLogin':
            return { ...state, login: action.payload }
        case 'addStates':
            return { ...state, states: action.payload }
        default:
            return state;
    }
}