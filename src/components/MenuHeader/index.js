import React, { Component } from 'react'
import "./index.less";
import { NavLink as Link } from "react-router-dom"
import { Menu, Row, Col, Layout } from "antd";

import logo from '../../assets/images/menu-header-logo.200x200.png';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { scrollTo } from "../../redux/actions";



@withRouter
@connect(
    null,
    { scrollTo }
)
class MenuHeader extends Component {
    state = {
        selectedKey: 'Home'
    }

    jumpTo = (path, to) => {
        this.props.history.push(path);
        if (to) {
            this.props.scrollTo(to);
        } else {
            this.props.scrollTo('');
        }
    }

    handleClick = e => {
        console.log(e);
        
        this.setState({
            selectedKey: e.key,
        });
    };

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

        console.log(this.state.selectedKey);
        
        const { staticContext, scrollTo, ...rest } = this.props;
        console.log(this.props.location.pathname);
        return (
            <Layout.Header {...rest}>
                <Row>
                    <Col span={4}>
                        <Link to="/" onClick={() => {
                            this.jumpTo('/');
                            this.setState({
                                selectedKey: "Home",
                            })
                        }} exact>
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
                            defaultSelectedKeys={["Home"]}
                            selectedKeys={[this.state.selectedKey]}
                            onClick={this.handleClick}
                            style={{
                                height: height,
                                lineHeight: height
                            }}
                        >
                            <Menu.Item key="Home">
                                <div onClick={() => this.jumpTo('/')}>Home</div>
                            </Menu.Item>
                            <Menu.Item key="About">
                                <div onClick={() => this.jumpTo('/', 'About')}>About</div>
                            </Menu.Item>
                            <Menu.Item key="CaseStudy">
                                <div onClick={() => this.jumpTo('/', 'CaseStudy')}>CaseStudy</div>
                            </Menu.Item>
                            <Menu.Item key="Notebook">
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