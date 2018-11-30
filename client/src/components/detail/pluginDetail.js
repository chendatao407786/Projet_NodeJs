import React,{Component} from 'react';
require('./css/pluginDetail.css');
class PluginDetail extends Component{
    constructor(props){
        super(props);
    }

    
    // componentWillMount(){
    //     let plugin = this.props.location.data
    //     this.setState({plugin:plugin})
    // }
    render(){
        let plugin = this.props.location.data
        console.log(plugin);
        
        return(
            <div className="detail-body">
                <div className="main-box flex-column">
                    <div className="venteur flex-column">
                        <span>{plugin.sellerName}</span>
                        <span>{plugin.siteSellerUrl}</span>
                    </div>
                </div>
            </div>
            
            
        );
    }
}
export default PluginDetail;