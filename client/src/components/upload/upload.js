import React, { Component } from 'react';

class Upload extends Component {
    render() {
        const divStyle = {
            width: '60%',
            heigh: 'auto',
            margin: '50px 20%'
        };
        return (
            <div style={divStyle} className="custom-file">
                <form>
                    <label htmlFor="seller">Seller:</label>
                    <div className="form-row" id="seller">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="sellerName" placeholder="Enter your name" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="sellerUrl" placeholder="Enter the web site URL of your company" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="creator">Creator:</label>
                        <input id="creator" className="form-control" placeholder="Creator's name" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="image">Plugin Image:</label>
                        <div className="custom-file" id="image">
                            <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                            <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>                    
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </form>
            </div>
        )
    }
};
export default Upload;