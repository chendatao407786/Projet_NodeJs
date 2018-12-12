import { SET_CURRENT_USER } from './types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user: user
    }
}

export const login = (user) => dispatch => {

        axios
            .post('/api/auth', user)
            .then(
            res => {
            localStorage.setItem('jwtToken',res.data.token);
            console.log(res);
            dispatch(setCurrentUser(jwtDecode(res.data.token).user))
            },
            (e) => {
                console.log(e.response);
                
            })
            
    
    
    
}