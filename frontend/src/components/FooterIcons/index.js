import React, { Component } from 'react'
import { Icon } from 'antd'

import "./index.less"


export default class index extends Component {
    render() {
        const IconFont = Icon.createFromIconfontCN({
            scriptUrl: this.props.scriptUrl
        });

        return (
            <ul className="footer-icon-ul">
                {
                    this.props.icons.map((icon) => {
                        const {type, href} = icon;
                        return (
                            <li key={"footer-icon-li-" + type}>
                                <a href={href}>
                                    <IconFont className="footer-icon-font" type={type} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
