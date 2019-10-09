import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
    userInfo: store.user.userInfo
});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(actions.login()),
    signUp: () => dispatch(actions.signup())
})

class LandingContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>LANDING PAGE</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);