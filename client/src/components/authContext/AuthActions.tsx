export type loginSuccessUserProp = {
    username: string,
    email: string,
    profilePic?: string,
    isAdmin: boolean,
    _id: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

//if you want to be able to pass an error prop if login fails, ie to get the error meessage, you'll create a prop type for it above, and then pass it into the argument, and then pass it in the the AuthReducer file into the "actionProp" type as a union with "loginSuccessUserProp" payload type

export const loginStart = () =>({
    type:"LOGIN_START",
});
export const loginSuccess = (user:loginSuccessUserProp) =>({
    type:"LOGIN_SUCCESS",
    payload: user, //in the authContext apiCalls file, just after the data is fetched, if successful, loginSuccess(res.data) is dispatched. Since "res.data" is the loginSuccess argument there, that means "res.data" represents "user" here which is sort of the placeholder argument for the loginSuccess Action here. This means that the payload will be the fetched data.
});
export const loginFailure = () =>({
    type:"LOGIN_FAILURE",
});


//logout

export const logout = () =>({
    type:"LOGOUT",
});