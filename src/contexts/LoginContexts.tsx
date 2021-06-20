import { createContext, useReducer, ReactNode, Dispatch } from "react";

import { Login, Forgot, Signup } from 'components';

enum ActionType {
    login = "login",
    forgot = "forgot",
    signup = "signup",
}

type State = {
    page?: string
    renderContent?: ()=>JSX.Element
}

type Action = {
    type: ActionType;
    payload?: State,
    from?:string
}

type LoginContext = {
    state: State;
    dispatcher: Dispatch<Action>
}

const initialState: State = { 
    page: 'login',    
    renderContent:()=><Login/>
}

function reducer(state: State, action: Action): State {

    let curState
    switch (action.type) {
        case ActionType.login:
            curState = {
                ...state,
                page: 'login',    
                renderContent:()=><Login/>
            }
            break
        case ActionType.forgot:
            curState = {
                ...state,
                page: 'forgot',
                renderContent: () =><Forgot />
            }
            break
        case ActionType.signup:
            curState = {
                ...state,
                page: 'signup',
                renderContent:()=><Signup/>
            }
            break
        default:
            throw new Error();
    }
    console.log("curState: ", curState)
    console.log(`from: ${action.from} curState: `, curState)
    return curState
}

const Context = createContext<LoginContext>({
    state: initialState,
    dispatcher: () => { }
});

function LoginProvider({ children }: { children: ReactNode }) {
    const [state, dispatcher] = useReducer(
        reducer,
        initialState,
    );

    return (
        <Context.Provider value={{ state, dispatcher }}>
            {children}
        </Context.Provider>
    );
}

export default { LoginProvider, Context, ActionType }
