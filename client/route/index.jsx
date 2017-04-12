import React, {Component, PropTypes} from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'

import IdeaList from '../pages/list/index.jsx'
import IdeaEditor from '../pages/editor/index.jsx'
import IdeaPreview from '../pages/preview/index.jsx'

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={IdeaList}/>
            <Route path="/list" component={IdeaList}></Route>          // 创意列表页
            <Route path="/edit" component={IdeaEditor}></Route>        // 创意编辑页
            <Route path="/preview" component={IdeaPreview}></Route>    // 创意预览页
        </Route>
    </Router>
);

export default RouteConfig;