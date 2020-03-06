import React, { Component } from "react";
import { Progress } from "antd";

import "./index.less";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      to: props.percent ? props.percent : 0
    };
    this.increase = this.increase.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    const { percent, to } = this.state;
    let newPercent = percent + 1;
    if (newPercent >= to) {
      this.setState({ percent: to });
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent: newPercent });
    this.tm = setTimeout(this.increase, 20);
  }

  restart() {
    clearTimeout(this.tm);
    this.setState({ percent: 0 }, () => {
      this.increase();
    });
  }

  render() {
    return (
      <div className="lazy-progress" {...this.props}>
        {this.props.children}
        <Progress className="lazy-progress-p" percent={this.state.percent} status="normal"/>
      </div>
    );
  }
}

export default index;
