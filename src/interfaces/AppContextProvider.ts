interface LoginProps {
    name: string
    email: string
    token: string
}

interface InitialStateProps {
    states: Array<{}>
    login: LoginProps
}

export interface ObjectContext {
    navigate?: Function,
    initState?: InitialStateProps
}
export interface Children {
    children:JSX.Element | JSX.Element[]
}