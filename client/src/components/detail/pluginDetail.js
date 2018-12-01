import React,{Component} from 'react';
import {Link} from 'react-router-dom';
require('./css/pluginDetail.css');

class PluginDetail extends Component{
    // constructor(props){
    //     super(props);
    // }
    getPluginCookie = () => {
        try{
            console.log(this.props.match.params.id);
            const plugin = JSON
                            .parse(Array(localStorage.getItem('state')))
                            .find(plugin => plugin._id === this.props.match.params.id);
            if(plugin === null){
                return undefined;
            }
            return plugin;
        }catch(e){
            console.log(e);
        }
    }
    render(){
        const plugin = this.getPluginCookie();    
        let tags = plugin.tag.map((element,index) => {
            return <Link to="#" key={index} className="tag">{element.text}</Link>
        })    
        return(
            <div className="detail-body">
                <div className="main-box flex-column">
                    <div className="venteur flex-column">
                        <span className="font-weight-7 sellor">{plugin.sellerName}</span>
                        <span>{plugin.siteSellerUrl}</span>
                    </div>
                    <h2 className="font-weight-7 creator">{plugin.creator}</h2>
                    <img className="plugin-image" src={plugin.imageUrl} alt=''></img>
                    <div className="tags-container">{tags}</div>
                    <p className="desc">{plugin.description}</p>
                </div>
            </div>
            
            
        );
    }
}
export default PluginDetail;