import AuthReducer from "./AuthReducer";
import {createContext, ReactNode, useEffect, useReducer} from "react";
import React from "react";

export type initialStateArgument = {
    user: string | null
    isFetching: boolean
    error: boolean
    dispatch?: React.Dispatch<any>
}

const userLs = localStorage.getItem("user");

const INITIAL_STATE:initialStateArgument = {
    user: userLs ? JSON.parse(userLs) : null, //if the user had logged in before, the initial state when he comes back to the website will be the "userL" which you declared above as the variable which stores the user item in localstorage. Else, if he hadn't logged in, it'll be null.
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

type authContextProviderProps = {
    children: ReactNode
}


export const AuthContextProvider = ({children} : authContextProviderProps) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    //storing the user object in the browser whenever it's generated after login
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user)) //this useEffect fires everytime the state of the "user" object changes, which happens during login and logout
    },[state.user]);

    return (
        <AuthContext.Provider 
        value={{
            user:state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}
        >
          {children}
          </AuthContext.Provider>
    );
};