import axios from "axios";
import { loginFailure, loginStart, loginSuccess, loginSuccessUserProp } from "./AuthActions";

type userProp = {
    email: string,
    password: string
}

export const login = async (user:userProp, dispatch: any) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("auth/login", user);
         dispatch(loginSuccess(res.data)); 
    }catch(err){
        dispatch(loginFailure());
    }
};


