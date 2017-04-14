import React, {Component, PropTypes} from 'react'
import Header from '../../layouts/header/listHeader/index.jsx'
import Footer from '../../layouts/footer/index.jsx'

export default class IdeaPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="_namespace">
                <Header/>
                <Footer/>
            </div>
        );
    }
}