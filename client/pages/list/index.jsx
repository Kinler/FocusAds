import React, {Component, PropTypes} from 'react'
import Header from '../../layouts/header/listHeader/index.jsx'
// import Container from '../../layouts/container/index.jsx'
import Footer from '../../layouts/footer/index.jsx'

export default class IdeaList extends Component {
    render() {
        return (
            <div className="_namespace">
                <Header/>
                <Footer/>
            </div>
        );
    }
}