import axios from 'axios';
import * as actionTypes from './actionTypes/userActionTypes';

let userData = require("../assets/data.json");

const setUsers = (users) => {
    return {
        type: actionTypes.USER_DATA,
        userData: users
    }
}

export const getAllUsers = () => {
    return dispatch => {
        return axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
            debugger
            return dispatch(setUsers(userData))
        }).catch((error) => {
            debugger
            console.log("err");
            console.log(error);
        })
    }
}





