import React, {Component, PropTypes} from 'react'
import {reduxForm, addArrayValue} from 'redux-form'
import PureInput from '../ComForms/PureInput'
import './index.scss'

export const fields = ['product_id'];

class BaseMtsForm extends Component {
    constructor(props) {
        super(props)
    }

    _handler(data) {
        console.log(data);
    }

    render() {
        const {addValue, fields, handleSubmit} = this.props;
        const {product_id} = fields;

        return (
            <div className="_namespace">
                <form onSubmit={handleSubmit(this._handler.bind(this))}>
                    <div className="form-group">
                        <label className="col-xs-4 control-label">名字</label>
                        <div className="col-xs-8">
                            <PureInput type="text" placeholder="1" field={product_id}/>
                        </div>
                    </div>

                    <button className="btn btn-success" type="submit">
                        保存当前组件数据
                    </button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'deep',
    fields
}, undefined, {addValue: addArrayValue})(BaseMtsForm);