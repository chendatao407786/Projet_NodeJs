import React,{Component} from 'react';
// import i from '../../../../storage/images/'
require('./css/index.css');
class PluginItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    };
    inspiredBy = () => {
        let description =this.props.plugin.description;
        if(description.includes("classic")){
            let inspiration;
            description = description.split("classic");
            for(let element of description){
                let ele = element.substring(0,40);
                if(ele.includes("(*)")){
                    inspiration = ele.split("(*)")[0];
                    break;
                }
            }
            // description = description.split("(*)")[0];
            return inspiration;
        }else{
            return "";
        }
        
    }
    
    render(){
        this.inspiredBy();
        return(
            <div className="container">
                <div className="detail">
                    <span id="title">{this.props.plugin.creator}</span>
                    <img src={this.props.plugin.imageUrl} alt=''></img>
                    <span className="sub-description">Inspired by <this.inspiredBy></this.inspiredBy></span>
                    <span className="button">DETAILS</span>
                </div>
                
            </div>
        );
    }
    
}

export default PluginItem;