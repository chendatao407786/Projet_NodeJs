import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./pluginStore.css');
class PluginStoreItem extends Component {
    // constructor(props) {
    //     super(props);
    // };
  

    redirectToItemDetails = () => {
        return (
            <Link
                to={{
                    pathname: '/plugin/' + this.props.plugin._id,
                    data: this.props.plugin
                }}>
                <img className="plugin-screenshot" src={this.props.plugin.imageUrl} alt=''></img>
            </Link>
        )
    }
    render() {        
        if (this.props.isEmpty === "false") {
            let plugin = this.props.plugin;
            let tags = plugin.tag.map((element, index) => {
                let pluginsFindByTagPath = {
                    pathname: '/plugin-store/'+element.id+'/'
                }
                return <Link to={pluginsFindByTagPath} key={index} className="tag">{element.id}</Link>
            })
            let image = this.redirectToItemDetails();
            return (
                <div className="store-item whiteframe">
                    {image}
                    {tags}
                    <div className="divider"></div>
                    <div className="plugin-info-container">
                        <button className="store-creator">{plugin.creator}</button>
                        <button className="brand">{plugin.sellerName}</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="plugin-item empty">
                </div>
            )
        }
    }
}
export default PluginStoreItem;