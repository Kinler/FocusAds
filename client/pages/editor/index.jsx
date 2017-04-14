// React Common Component
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import request from 'superagent'
import _ from 'lodash'

// React Component
import EditHeader from '../../containers/connectToEditorHeader/index'
import EditContainer from '../../containers/connectToEditorContainer/index'
// import Footer from '../../layouts/footer/index'

// React Redux
import ToEditApp from '../../redux/reducers/index.jsx'

// Layouts
import { Layout, Header , Sidebar, Section, Footer } from 'fit-layout-global'

let store = createStore(ToEditApp, window.devToolsExtension
    ? window.devToolsExtension()
    : undefined);

class IdeaEditor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Layout className="_namespace" key={this.props.location.query.pageId}>
                    <Header height={66}>
                        <EditHeader />
                    </Header>
                    <Section>
                        <EditContainer />
                    </Section>
                    <Footer height={40}>页尾</Footer>
                </Layout>
            </Provider>
        );
    }
}

export default IdeaEditor;