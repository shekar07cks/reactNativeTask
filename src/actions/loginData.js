import axios from 'axios';
import * as actionTypes from './actionTypes/userActionTypes';

let userData = require("../assets/data.json");

const setLogin = (data) => {
    return {
        type: actionTypes.LOGIN_USER,
        loginData: data
    }
}

export const getLoginData = () => {
    return dispatch => {
        return axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
            debugger
            return dispatch(setLogin(userData));
        }).catch((error) => {
            debugger
            console.log("err");
            console.log(error);
        })
    }
}





