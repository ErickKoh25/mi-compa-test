export interface LoginProps {
    name: string
    email: string
    token: string
}

export interface InitialStateProps {
    states: Array<{}>
    login: LoginProps
}

export interface ObjectContext {
    navigate?: Function,
    initState?: InitialStateProps
    setLogin?: Function
    removeLogin?: Function
    addStates?: Function
}
export interface Children {
    children:JSX.Element | JSX.Element[]
}