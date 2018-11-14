import React, { Component } from 'react';
import Tag from './tag';
// import Parametre from './parametre';
import ParametreList from './parametreList';
class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sellerName: null,
            sellerUrl: null,
            creator: null,
            image: null,
            description: null,
            tags:[],
            parametres:[]
        }
    }
    handleSubmit = (event) => { 
        event.preventDefault();
        console.log(this.state);
    }
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    updateTags = (tags) => {
        this.setState({
            tags: tags
        })
    }
    updateParametres = (parametres) => {
        this.setState({
            parametres:parametres
        })
    }

    render() {
        const labelStyle = {
            fontSize: '30px',
            fontWeight: '100'
        };

        const font_weight = {
            fontWeight: '100'
        };

        const divStyle = {
            width: '60%',
            heigh: 'auto',
            margin: '50px 20%',
        };
        return (
            <div style={divStyle} className="custom-file">
                <form onSubmit={this.handleSubmit}>
                    <label style={labelStyle} htmlFor="seller">Seller:</label>
                    <div className="form-row" id="seller">
                        <div className="form-group col-md-6">
                            <input style={font_weight} type="text" className="form-control" id="sellerName" name="sellerName" placeholder="Enter your name" onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <input onChange={this.handleInputChange} style={font_weight} type="text" className="form-control" id="sellerUrl" name="sellerUrl" placeholder="Enter the web site URL of your company" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="creator">Creator:</label>
                        <input onChange={this.handleInputChange} style={font_weight} id="creator" className="form-control" name="creator" placeholder="Creator's name" />
                    </div>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="image">Plugin Image:</label>
                        <div className="custom-file" id="image">
                            <input onChange={this.handleInputChange} style={font_weight} type="file" className="custom-file-input" id="image" name="image" required />
                            <label style={font_weight} className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="description">Description:</label>
                        <textarea onChange={this.handleInputChange} style={font_weight} name="description" className="form-control" id="description" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="addParametreButton">Parametres:</label>
                        <ParametreList action={this.updateParametres} name="parametre" />
                    </div> 
                    <div className="form-group">
                        <label style={labelStyle}>Tags:</label>
                        <Tag action={this.updateTags}/>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Submit form</button>
                </form>
                
            </div>
        )
    }
};
export default Upload;