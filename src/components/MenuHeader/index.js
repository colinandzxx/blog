import React, { Component } from 'react'
import "./index.less";
import { NavLink as Link } from "react-router-dom"
import { Menu, Row, Col, Layout } from "antd";

import logo from '../../assets/images/menu-header-logo.svg';

export default class MenuHeader extends Component {
    render() {
        let height = '64px';
        let minWight = undefined;
        if (typeof (this.props.style) != "undefined") {
            if (typeof (this.props.style.height) != "undefined") {
                height = this.props.style.height;
            }
            if (typeof (this.props.style.minWight) != "undefined") {
                minWight = this.props.style.minWight;
            }
        }

        return (
            <Layout.Header className="menu-header"
                {...this.props}
            >
                <Row>
                    <Col span={4}>
                        <Link to="/" exact>
                            <img src={logo}
                                className="menu-header-logo"
                                alt="logo"
                                style={{
                                    height: height,
                                    minWight: minWight
                                }} />
                        </Link>
                    </Col>
                    <Col span={16}>
                        <Menu className="menu-header-menu"
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                            style={{
                                height: height,
                                lineHeight: height
                            }}
                        >
                            <Menu.Item key="1">
                                <a href="home#">Home</a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a href="home#About">About</a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a href="home#CaseStudy">Case Study</a>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/notebook">Notebook</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={4} />
                </Row>
            </Layout.Header>
        )
    }
}
