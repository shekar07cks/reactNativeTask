import * as actionTypes from '../actions/actionTypes/userActionTypes';
import { updateObject } from './utill';

const INITIAL_STATE = {
    userData: "",
    loginUser: "",
};

const getAllUsers = (state, action) => {
    debugger
    return updateObject(state,
        {
            userData: action.userData.user
        }
    );
}

const loginData = (state, action) => {
    return updateObject(state,
        {
            loginUser: action.loginData
        }
    );
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.USER_DATA:
            return getAllUsers(state, action);
        case actionTypes.LOGIN_USER:
            return loginData(state, action);
        default:
            return state;
    }
};

export default reducer;