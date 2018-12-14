import {GET_MY_PLUGINS,LOADING_USER_DATA} from '../actions/types';
const initialState = {
    userData:[],
    loading:false
}

export default function (state = initialState,action){
    switch(action.type){
        case GET_MY_PLUGINS:
            return {
                ...state,
                userData:action.payload,
                loading:false
            }
        case LOADING_USER_DATA:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
}