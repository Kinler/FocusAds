import React, {Component, PropTypes} from 'react'
import {changeNavStatus} from '../../redux/action/index'
import './index.scss'

export default class EditorNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    changeNavStatusAction(idx) {
        const props = this.props;
        const dispatch = props.dispatch;
        dispatch(changeNavStatus(idx));
    }

    setActiveNavItem(idx) {
        this.setState({
            activeIndex: idx
        });
        this.changeNavStatusAction(idx);
    }

    getNavList() {
        const that = this;
        const BASE_NAV_CONF = [
            {
                text: '填写聚睛物料基本信息',
                link: 'javascript:void(0)'
            }, {
                text: '制作落地页',
                link: 'javascript:void(0)'
            }, {
                text: '预览&提交',
                link: 'javascript:void(0)'
            }
        ]

        return (
            <div className="crumbs">
                <ul>
                    {((NavList) => {
                        return NavList && NavList.map && NavList.map((input, idx) => {
                            return (
                                <li key={idx}>
                                    <a
                                        onClick={that.setActiveNavItem.bind(that, idx)}
                                        className={+that.state.activeIndex === idx ? 'active' : ''}
                                        href={input.link}>
                                        {input.text}
                                    </a>
                                </li>
                            )
                        })
                    })(BASE_NAV_CONF)}
                </ul>
            </div>
        )
    }

    render() {
        let that = this;

        return (
            <div className="_namespace">
                {this.getNavList()}
            </div>
        )
    }
}
