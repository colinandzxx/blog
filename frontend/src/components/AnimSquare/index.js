import React, { Component } from "react";
import "./index.less";
import anime from "animejs";
import preProcStyle from "./preProcStyle.js";

@preProcStyle
class AnimSquare extends Component {
    selfRef = React.createRef();

    // constructor(props) {
    //     super(props)
    //     if (this.props.style.width) {
    //         this.props.style.height = this.props.style.width;
    //     }
    // }

    componentDidMount() {
        // var basicTimeline = anime.timeline();

        // backgroundColor = getComputedStyle(
        //   this.selfRef.current
        // ).getPropertyPriority("backgroundColorFinal");

        let animeParms = this.props.style.animeParms;
        animeParms.targets = this.selfRef.current;
        anime(animeParms);
        // .play();
    }

    render() {
        if (this.props.style.width) {
            this.props.style.height = this.props.style.width;
        }
        return <div ref={this.selfRef} 
        className="square" 
        {...this.props} />;
    }
}

export default AnimSquare;