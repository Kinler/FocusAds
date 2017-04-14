import React, {Component, PropTypes} from 'react'
import BaseMtsForm from '../formGroup/baseMtsForm/index'
import LPForm from '../formGroup/lpForm/index'
import './index.scss'

class Forms extends Component {
    constructor(props) {
        super(props)
    }

    getActiveForms() {
        const props = this.props;
        const activeIdx = props && props.activeItem;

        switch (+activeIdx) {
            case 0:
                return <BaseMtsForm/>;
                break;
            case 1:
                return <LPForm/>;
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="_namespace">
                {this.getActiveForms()}
            </div>
        )
    }
}

export default Forms;