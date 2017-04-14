import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import EditorHeader from '../../layouts/header/EditorHeader/index'

const mapStateToProps = (state) => {
    return {activeItem: state.active, cards: state.cards, pageInfo: state.pageInfo};
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
}

const ConnectToHeader = connect(mapStateToProps, mapDispatchToProps)(EditorHeader);

export default ConnectToHeader;