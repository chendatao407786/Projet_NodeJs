import {SET_CURRENT_USER } from '../actions/types'
const initialState = {
    user:{},
    isSignIn:false
}
const auth = (state = initialState, action = {}) => {
    switch(action.type){
        case SET_CURRENT_USER :
            return {
                ...state,
                user:action.user,
                isSignIn: true
            }
        default: return state;
    }
}
export default auth;