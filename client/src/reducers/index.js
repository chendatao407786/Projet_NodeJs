import{combineReducers} from 'redux';
import pluginReducer from './pluginReducer';

export default combineReducers({
    plugin: pluginReducer
});