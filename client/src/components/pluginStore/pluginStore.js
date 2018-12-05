import React, { Component } from 'react';
import PluginStoreItem from './pluginStoreItem';
import { connect } from 'react-redux';
import {getPlugins,getPluginsByTag} from '../../actions/pluginActions';
import PropTypes from 'prop-types';
import searchLogo from '../../img/search.png';
require('./pluginStore.css');

class PluginStore extends Component {

    componentWillMount() {
        let pathname = this.props.location.pathname;
        console.log(pathname);
        if(pathname==="/plugin-store"){
            this.props.getPlugins();
        }
        else{ 
            console.log(this.props.match.params);
            this.props.getPluginsByTag(this.props.match.params.tag);
        }
        
    }
    
    render() {        
        let listPlugins = this.props.plugin.plugins.map((element, index) => {
            return <PluginStoreItem isEmpty="false" plugin={element} key={index}></PluginStoreItem> 
        })
        return (
            <div className="store-body">
                <div className="page-title">
                    <h1>PLUGINS</h1>
                    <p>Here be plugins</p>
                    <p className="shortline"></p>
                </div>
                <div className="search-container whiteframe">
                    <input type="text" className="feed-search-text" placeholder="Search plugins"/>
                    <button type="button" className="feed-search-button">
                        <img src={searchLogo} alt=""/>
                    </button>
                </div>
                <div className="store-plugins-container">
                    {listPlugins}
                    <PluginStoreItem isEmpty="true"></PluginStoreItem>
                    <PluginStoreItem isEmpty="true"></PluginStoreItem>
                </div>
            </div>
        )
    }
}
PluginStore.propTypes = {
    getPlugins: PropTypes.func.isRequired,
    getPluginsByTag: PropTypes.func.isRequired,
    plugin: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    plugin : state.plugin
})

export default connect(mapStateToProps,{getPlugins,getPluginsByTag})(PluginStore);