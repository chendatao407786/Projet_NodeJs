import React, { Component } from 'react';
// import $ from 'jquery';

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
// class Parametre extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             controler: null,
//             default:null,
//             min:null,
//             max:null
//         }
//     }
//     handleInputChanged = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         },()=>{
//             console.log(this.state);
//         })
//     }

//     handleOnClick = (event) => {
//         $('#parametreSubmit').attr("disabled", "disabled");
//     }
//     render(){
//         return(
//             <div className="form-row" id="seller">
//                 <div className="form-group col-md-2.5">
//                     <input style={font_weight} type="text" className="form-control" id="sellerName" placeholder="Control" name="controler" />
//                 </div>
//                 <div className="form-group col-md-2.5">
//                     <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Default" name="default" />
//                 </div>
//                 <div className="form-group col-md-2.5">
//                     <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Min" name="min" />
//                 </div>
//                 <div className="form-group col-md-2.5">
//                     <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Max" name="max" />
//                 </div>
//                 <div className="form-group col-md-1">
//                     <button id="parametreSubmit" style={add_button} className="btn btn-primary btn-sm" onClick={this.handleOnClick}>+</button>
//                 </div>  
//             </div>
//         )
//     }
// }
function Parametre(props){
    return(
        <div className="form-row" id="parametre">
                 <div className="form-group col-md-2.5">
                     <input style={font_weight}  className="form-control" id="controler" name="controler" value={props.parametre.controler} disabled="disabled"/>
                 </div>
                 <div className="form-group col-md-2.5">
                     <input style={font_weight}  className="form-control" id="default" name="default" value={props.parametre.default} disabled="disabled"/>
                 </div>
                 <div className="form-group col-md-2.5">
                     <input style={font_weight}  className="form-control" id="min" name="min" value={props.parametre.min} disabled="disabled"/>
                 </div>
                 <div className="form-group col-md-2.5">
                     <input style={font_weight}  className="form-control" id="max" name="max" value={props.parametre.max} disabled="disabled"/>
                 </div>
                 <div className="form-group col-md-1">
                     <button id="parametreSubmit" style={add_button} className="btn btn-danger" onClick={()=>props.removeParametre(props.parametre)}>-</button>
                 </div>  
             </div>
    
    );
}

export default Parametre;