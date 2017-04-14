import React, {Component, PropTypes} from 'react'
import EditorNav from '../../../components/nav/index'
import Preview from '../../../components/preview/index'
import Forms from '../../../components/forms/index'
import {Row, Col} from 'fit-layout'

import './index.scss'

class EditorContainer extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="_namespace">
                <div className="editor-container">
                    <Row>
                        <Col span="16">
                            <EditorNav {...this.props}/>
                            <Forms {...this.props}/>
                        </Col>
                        <Col span="8">
                            <Preview/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default EditorContainer