import React,{Component} from 'react';
import {connect} from 'react-redux';
import {} from '../../actions/userDataAction';
import PropTypes from 'prop-types';
class ModifyMyPlugin extends Component{
    render(){
        console.log(this.props.userData);
        return(
            0
        )
    }
}
ModifyMyPlugin.propTypes = {
    userData:PropTypes.object.isRequired,
    // auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    // auth: state.auth,
    userData:state.userData
})
export default connect(mapStateToProps,{})(ModifyMyPlugin);