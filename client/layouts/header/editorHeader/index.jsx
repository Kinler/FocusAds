import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

import './index.scss'

class EditorHeader extends Component {
     constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="_namespace">
                <header className="header clearfix">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="container">
                            <div className="nav-logo">
                                Blizt
                            </div>
                            <div className="nav-buttons">
                                <ul>
                                    <li>
                                        <Link className="btn" to="/edit">
                                            新建
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="btn" to="/auth">
                                            权限管理
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}


export default EditorHeader;