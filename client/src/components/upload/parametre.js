import React, { Component } from 'react';
import $ from 'jquery';

const font_weight = {
    fontWeight: '100'
};
const add_button = {
    padding: '0',
    height: '100%',
    width: '100%',
    fontSize: '100%',
    fontWeight:'400'
};
class Parametre extends Component{
    constructor(props){
        super(props);
        this.state = {
            controler: null,
            default:null,
            min:null,
            max:null
        }
    }
    handleInputChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        },()=>{
            console.log(this.state);
        })
    }

    handleOnClick = (event) => {
        $('#parametreSubmit').attr("disabled", "disabled");
    }
    render(){
        return(
            <div className="form-row" id="seller">
                <div className="form-group col-md-2.5">
                    <input style={font_weight} type="text" className="form-control" id="sellerName" placeholder="Control" name="controler" onChange={this.handleInputChanged}/>
                </div>
                <div className="form-group col-md-2.5">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Default" name="default" onChange={this.handleInputChanged}/>
                </div>
                <div className="form-group col-md-2.5">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Min" name="min" onChange={this.handleInputChanged}/>
                </div>
                <div className="form-group col-md-2.5">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Max" name="max" onChange={this.handleInputChanged}/>
                </div>
                <div className="form-group col-md-1">
                    <button id="parametreSubmit" style={add_button} className="btn btn-primary btn-sm" onClick={this.handleOnClick}>+</button>
                </div>  
            </div>
        )
    }
}

export default Parametre;