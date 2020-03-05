import React, { Component } from 'react'
import "./index.less";
import { NavLink as Link } from "react-router-dom"
import { Menu, Row, Col, Layout, Button } from "antd";
import ScrollIntoView from 'react-scroll-into-view';

import logo from '../../assets/images/menu-header-logo.svg';

import { withRouter } from 'react-router-dom';



@withRouter
class MenuHeader extends Component {
    // constructor(props) {
    //     super(props)
    //     const {staticContext, ...rest} = props;
    // }

    test = (path) => {
        this.props.history.push(path);
        // document.querySelector('#TopAnim').scrollIntoView(true);
    }

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

        const { staticContext, ...rest } = this.props;
        console.log(this.props.location);
        return (
            <Layout.Header {...rest}>
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
                                {/* <a href="home#TopAnim">Home</a> */}
                                {/* {                                    
                                        this.props.location.pathname === '/home' || this.props.location.pathname === '/' ?
                                            <ScrollIntoView selector="#TopAnim">Home</ScrollIntoView> : null                                    
                                } */}
                                {/* <Button onClick={() => this.props.history.push('/home')}> */}
                                {/* <ScrollIntoView selector="#TopAnim">Home</ScrollIntoView> */}
                                {/* </Button> */}
                                <div onClick={() => this.test('/home')}>Home</div>
                            </Menu.Item>
                            <Menu.Item key="2">
                                {/* <a href="home#About">About</a> */}
                                {/* <Button onClick={() => this.props.history.push('/home')}> */}
                                {/* <ScrollIntoView selector="#About">About</ScrollIntoView> */}
                                {/* </Button> */}
                                <div onClick={() => this.test('/home')}>About</div>
                            </Menu.Item>
                            <Menu.Item key="3">
                                {/* <a href="home#CaseStudy">Case Study</a> */}
                                <ScrollIntoView selector="#CaseStudy">CaseStudy</ScrollIntoView>
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

export default MenuHeader;