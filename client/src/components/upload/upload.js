import React, { Component } from 'react';

class Upload extends Component {
    render() {
        const divStyle = {
            width: '80%',
            margin: 'auto 0'
        };
        return (
            <div style={divStyle} className="custom-file">
                <form>
                <label htmlFor="seller">Seller</label>
                    <div className="form-row" id="seller"> 
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="sellerName" placeholder="Enter your name" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="sellerUrl" placeholder="Enter the site of your company" />
                        </div>
                    </div>

                    {/* <input type="file" className="custom-file-input" id="customFile" />
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label> */}
                </form>
            </div>
        )
    }
};
export default Upload;