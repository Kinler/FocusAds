import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import EditorContainer from '../../layouts/container/EditorContainer/index'

const mapStateToProps = (state) => {
    return {
        activeItem: state.activeNav.idx || 0,
        cards: state.cards,
        pageInfo: state.pageInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
}

const ConnectToContainer = connect(mapStateToProps, mapDispatchToProps)(EditorContainer);

export default ConnectToContainer;