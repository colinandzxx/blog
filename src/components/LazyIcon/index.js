import React, { Component } from "react";
import Measure from "react-measure";
import { Icon } from "antd";

class index extends Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  };

  render() {
    const { width, height } = this.state.dimensions;

    const { scriptUrl, ...rest } = this.props;
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: scriptUrl
    });

    return (
      <Measure
        bounds
        onResize={contentRect => {
          console.log(contentRect);
          this.setState({ dimensions: contentRect.bounds });
        }}
      >
        {({ measureRef }) => {
          return (
            <div
              ref={measureRef}
              {...rest}
              style={{
                paddingLeft: 0.1 * width,
                paddingRight: 0.1 * width,
                paddingTop: 0.1 * height,
                paddingBottom: 0.1 * height,
                borderRadius: width > height ? 0.2 * width : 0.2 * height
              }}
            >
              <IconFont
                type={this.props.type}
                style={{
                  fontSize: width > height ? 0.8 * width : 0.8 * height
                }}
              />
            </div>
          );
        }}
      </Measure>
    );
  }
}

export default index;
