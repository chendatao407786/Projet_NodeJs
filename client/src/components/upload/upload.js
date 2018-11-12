import React, { Component } from 'react';
import Tag from './tag';
class Upload extends Component {
    render() {
        const labelStyle = {
            fontSize: '30px',
            fontWeight: '100'
        };

        const font_weight = {
            fontWeight: '100'
        }
        const divStyle = {
            width: '60%',
            heigh: 'auto',
            margin: '50px 20%',
        };
        return (
            <div style={divStyle} className="custom-file">
                <form>
                    <label style={labelStyle} htmlFor="seller">Seller:</label>
                    <div className="form-row" id="seller">
                        <div className="form-group col-md-6">
                            <input style={font_weight} type="text" className="form-control" id="sellerName" placeholder="Enter your name" />
                        </div>
                        <div className="form-group col-md-6">
                            <input style={font_weight} type="text" className="form-control" id="sellerUrl" placeholder="Enter the web site URL of your company" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="creator">Creator:</label>
                        <input style={font_weight} id="creator" className="form-control" placeholder="Creator's name" />
                    </div>
                    <div className="form-group">
                    <label style={labelStyle} htmlFor="image">Plugin Image:</label>
                        <div className="custom-file" id="image">
                            <input style={font_weight} type="file" className="custom-file-input" id="validatedCustomFile" required />
                            <label style={font_weight} className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>                    
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="description">Description:</label>
                        <textarea style={font_weight} className="form-control" id="description" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <Tag/>
                    </div>
                    
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </form>
            </div>
        )
    }
};
export default Upload;