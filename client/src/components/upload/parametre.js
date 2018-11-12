import React, { Component } from 'react';
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
    render(){
        return(
            <div className="form-row" id="seller">
                <div className="form-group col-md-2.5">
                    <input style={font_weight} type="text" className="form-control" id="sellerName" placeholder="Control" />
                </div>
                <div className="form-group col-md-2.5">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Default" />
                </div>
                <div className="form-group col-md-2.5">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Min" />
                </div>
                <div className="form-group col-md-2.5">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Max" />
                </div>
                <div className="form-group col-md-1">
                    <button style={add_button} className="btn btn-primary btn-sm">+</button>
                </div>  
            </div>
        )
    }
}

export default Parametre;