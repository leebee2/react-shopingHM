const initialState = {
    userEmail: '',
    userPassword: '',
    authenFlag : false,
}

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                userEmail: payload.email,
                userPassword: payload.password,
                authenFlag : true,
            }
        case "ROGOUT":
            return { ...state, authenFlag: false }
        default:
            return { ...state }
    }
}

export default authenticateReducer;
