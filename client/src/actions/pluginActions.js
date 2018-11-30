import axios from 'axios';
import {GET_PLUGINS,ADD_PLUGIN,DELETE_PLUGIN,LOADING_PLUGIN} from './types';
// import Restaurant from '../components/Restaurant';

export const getPlugins = () => dispatch => {    
    dispatch(setPluginsLoading());
    console.log("getting plugins");
    axios
        .get('/api/plugin')
        .then(res => dispatch({
            type: GET_PLUGINS,
            payload:res.data
        }))

};
export const deletePlugin = id => dispatch=>{
    axios
        .delete('/api/plugin/'+id)
        .then(res => dispatch({
            type:DELETE_PLUGIN,
            payload:id
        }))
};

export const addPlugin  = plugin => dispatch=>{
    axios.post('/api/plugin',plugin)
}

export const setPluginsLoading = ()=>{
    return{
        type:LOADING_PLUGIN
    }
}