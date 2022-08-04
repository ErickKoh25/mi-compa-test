import { createSlice } from "@reduxjs/toolkit"


interface LoginProps {
    name: string
    email: string
    token: string
}

interface InitialStateProps {
    states: Array<{}>
    login: LoginProps
}

const initialState:InitialStateProps = {
    states: [],
    login: {
        name: '',
        email: '',
        token: ''
    }
}

export const generalSlice = createSlice({
    name: 'micompa',
    initialState: initialState,
    reducers: {
        setStates(state, action) { 
            state.states = action.payload
        },
        setLogin(state, action) { 
            state.login = action.payload
        },
        removeLogin(state) { 
            state.login = {
                name: '',
                email: '',
                token: ''
            }
        },
    },
})

export const { setStates, setLogin, removeLogin } = generalSlice.actions;