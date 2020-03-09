import React, { Component } from "react";
import "./index.less";
import { NavLink as Link } from "react-router-dom";
import { Menu, Row, Col, Layout } from "antd";

import logo from "../../assets/images/menu-header-logo.200x200.png";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { scrollToAction } from "../../redux/actions";

@withRouter
@connect(
  state => {
    return { scrollTo: state.scrollTo };
  },
  { scrollToAction }
)
class MenuHeader extends Component {
  state = {
    selectedKey: "Home"
  };

  jumpTo = (path, to) => {
    this.props.history.push(path);
    if (to) {
      this.props.scrollToAction(to);
    } else {
      this.props.scrollToAction("");
    }
  };

  handleClick = e => {
    console.log(e);

    this.setState({
      selectedKey: e.key
    });
  };

  componentDidMount() {
    if (this.props.location.pathname) {
      if (
        this.props.location.pathname === "/" ||
        this.props.location.pathname === "/home"
      ) {
        let key = "Home";
        if (this.props.scrollTo !== "") {
          key = this.props.scrollTo;
        }
        this.setState({
          selectedKey: key
        });
      } else {
        let key = this.props.location.pathname
          .slice(1) // remove '/'
          .toLowerCase()
          .replace(/( |^)[a-z]/g, L => L.toUpperCase());    // Upper first letter
        this.setState({
          selectedKey: key
        });
      }
    }
  }

  render() {
    let height = "64px";
    let minWight = undefined;
    if (typeof this.props.style != "undefined") {
      if (typeof this.props.style.height != "undefined") {
        height = this.props.style.height;
      }
      if (typeof this.props.style.minWight != "undefined") {
        minWight = this.props.style.minWight;
      }
    }

    const { staticContext, scrollTo, scrollToAction, ...rest } = this.props;
    return (
      <Layout.Header {...rest}>
        <Row>
          <Col span={4}>
            <Link
              to="/"
              onClick={() => {
                this.jumpTo("/");
                this.setState({
                  selectedKey: "Home"
                });
              }}
              exact
            >
              <img
                src={logo}
                className="menu-header-logo"
                alt="logo"
                style={{
                  height: height,
                  minWight: minWight
                }}
              />
            </Link>
          </Col>
          <Col span={16}>
            <Menu
              className="menu-header-menu"
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
                <div onClick={() => this.jumpTo("/")}>Home</div>
              </Menu.Item>
              <Menu.Item key="About">
                <div onClick={() => this.jumpTo("/", "About")}>About</div>
              </Menu.Item>
              <Menu.Item key="CaseStudy">
                <div onClick={() => this.jumpTo("/", "CaseStudy")}>
                  CaseStudy
                </div>
              </Menu.Item>
              <Menu.Item key="Notebook">
                <Link to="/notebook">Notebook</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={4} />
        </Row>
      </Layout.Header>
    );
  }
}

export default MenuHeader;
