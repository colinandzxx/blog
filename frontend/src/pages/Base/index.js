import React, { Component } from "react";
import { Layout, Divider } from "antd";
import Copyright from "copyright";
import { MenuHeader as Header, FooterIcons } from "../../components";
// import { Home, Notebook, NotFound } from "./pages";
import { Helmet } from "react-helmet";
import "./index.less";

const { Footer } = Layout;

class Base extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>yo! yo! check it out!</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Layout className="App">
          <Header
            className="App-header"
            style={{
              height: "40px",
              minWidth: "400px"
            }}
          ></Header>

          {this.props.children}

          <Footer className="App-footer">
            <Divider />
            <FooterIcons
              scriptUrl="//at.alicdn.com/t/font_1653660_pzl0t4uvxm.js"
              icons={[
                {
                  type: "icon-github",
                  href: "https://github.com/"
                },
                {
                  type: "icon-telegram",
                  href: "https://telegram.org/"
                }
              ]}
            />
            <div>{Copyright("yaoyaoqienao.top")}</div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Base;
