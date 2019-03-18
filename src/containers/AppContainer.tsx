import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/main-actions';
import App from '../components/App/App';

function mapStateToProps(state: any) {
    return {weather: state}
}

export const AppContainer = connect(
    mapStateToProps,
    actionCreators
)(App);