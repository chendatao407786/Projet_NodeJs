import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMyPlugins} from '../../actions/userDataAction';
import PropTypes from 'prop-types';
import MyPluginItem from './myPluginItem';
require('./myAccount.css');

class MyPlugins extends Component {
    componentWillMount(){
        this.props.getMyPlugins(this.props.auth.user[0]._id);
    }
    render(){
        let plugins = this.props.userData.userData;
        let myPluginsList = plugins.map((element,index) => {
            return<MyPluginItem isEmpty="false" plugin={element} key={index}></MyPluginItem> 
        })
        return(
            <div className="store-plugins-container">{myPluginsList}</div>
        )
    }
}

MyPlugins.propTypes = {
    getMyPlugins:PropTypes.func.isRequired,
    userData:PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    userData:state.userData
})
export default connect(mapStateToProps,{getMyPlugins})(MyPlugins);