import React, { Component } from 'react';
const font_weight = {
    fontWeight: '100'
};
class Parametre extends Component{
    render(){
        return(
            <div className="form-row" id="seller">
                <div className="form-group col-md-3">
                    <input style={font_weight} type="text" className="form-control" id="sellerName" placeholder="Control" />
                </div>
                <div className="form-group col-md-3">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Default" />
                </div>
                <div className="form-group col-md-3">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Min" />
                </div>
                <div className="form-group col-md-3">
                    <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Max" />
                </div>
            </div>
        )
    }
}

export default Parametre;