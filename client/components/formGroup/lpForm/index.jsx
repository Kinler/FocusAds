import React, {Component, PropTypes} from 'react'
import {reduxForm, addArrayValue} from 'redux-form'
import PureInput from '../ComForms/PureInput'
import './index.scss'

export const fields = [
    'product_id'
];

class LPForm extends Component {
    constructor(props) {
        super(props)
    }

    _handler(data) {
        console.log(data);
    }

    render() {
        const {addValue, fields, handleSubmit} = this.props;
        const { product_id } = fields;

        return (
            <div className="_namespace">
                LP的表单
            </div>
        )
    }
}

export default reduxForm({
    form: 'deep',
    fields
}, undefined, {
    addValue: addArrayValue
})(LPForm);