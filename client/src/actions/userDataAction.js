import {GET_MY_PLUGINS,LOADING_USER_DATA} from './types';
import axios from 'axios';
export const getMyPlugins = (id) => dispatch => {
    let pathname = '/api/user/myplugins/'+id;
    axios
        .get(pathname)
        .then(res => dispatch({
            type:GET_MY_PLUGINS,
            payload:res.data
        }))
}
export const setUserDataLoading = () =>{
    return{
        type:LOADING_USER_DATA
    }
}