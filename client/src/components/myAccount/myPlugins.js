import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMyPlugins} from '../../actions/userDataAction';
import PropTypes from 'prop-types';
import MyPluginItem from './myPluginItem';
require('./myAccount.css');

class MyPlugins extends Component {
    componentWillMount(){
        this.props.getMyPlugins(this.props.userId);
    }
    render(){
        // console.log(this.props.userData.userData);
        // console.log(this.props.userId);
        let plugins = this.props.userData.userData;
        console.log(plugins);
        
        let myPluginsList = plugins.map((element,index) => {
            return<MyPluginItem isEmpty="false" plugin={element} key={index}></MyPluginItem> 
            // console.log(element);
        })

        return(
            <div className="store-plugins-container">{myPluginsList}</div>
        )
    }
}

MyPlugins.propTypes = {
    getMyPlugins:PropTypes.func.isRequired,
    userData:PropTypes.object.isRequired,
    userId:PropTypes.string.isRequired
}
const mapStateToProps = (state) => ({
    userId:state.auth.user[0]._id,
    userData:state.userData
})
export default connect(mapStateToProps,{getMyPlugins})(MyPlugins);