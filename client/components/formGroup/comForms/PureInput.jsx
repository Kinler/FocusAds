import React, {Component, PropTypes} from 'react';

export default class PureInput extends Component {

	propTypes: {
		field: React.PropTypes.object.isRequired
	}

    shouldComponentUpdate(nextProps) {
        return this.props.field !== nextProps.field;
    }

    render() {
        const {field, ...rest} = this.props;
        return <input className="form-control" {...field} {...rest}/>;
    }
}

// PureInput.propTypes ={
//     field: PropTypes.object.isRequired
// }
