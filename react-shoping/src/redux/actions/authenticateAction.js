function login(email, password) {
    return (dispatch, getState) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { email, password }})
    }
}

export const authenticateAction = { login };