import React, { Component } from 'react';

const preProcStyle = (WrappedComponent) => {
    return class extends Component {
        render() {
            let animeParms = {
                // targets: this.selfRef.current,
                translateX: "33rem",
                rotate: 360,
                borderRadius: ["0%", "50%"],
                duration: 5000,
                backgroundColor: "#000",
                direction: "alternate",
                easing: "easeInOutSine",
                loop: true
            };

            if (this.props.style) {
                if (this.props.style.animeParms) {
                    animeParms.translateX = this.props.style.animeParms.translateX ? this.props.style.animeParms.translateX : animeParms.translateX;
                    animeParms.translateY = this.props.style.animeParms.translateY ? this.props.style.animeParms.translateY : animeParms.translateY;
                    animeParms.rotate = this.props.style.animeParms.rotate ? this.props.style.animeParms.rotate : animeParms.rotate;
                    animeParms.borderRadius = this.props.style.animeParms.borderRadius ? this.props.style.animeParms.borderRadius : animeParms.borderRadius;
                    animeParms.duration = this.props.style.animeParms.duration ? this.props.style.animeParms.duration : animeParms.duration;
                    animeParms.backgroundColor = this.props.style.animeParms.backgroundColor ? this.props.style.animeParms.backgroundColor : animeParms.backgroundColor;
                    animeParms.direction = this.props.style.animeParms.direction ? this.props.style.animeParms.direction : animeParms.direction;
                    animeParms.easing = this.props.style.animeParms.easing ? this.props.style.animeParms.easing : animeParms.easing;
                    animeParms.loop = this.props.style.animeParms.loop ? this.props.style.animeParms.loop : animeParms.loop;
                }
            }

            const {
                height,
                ...others
            } = this.props;
            others.style.animeParms = animeParms;            

            return <WrappedComponent {...others} />;
        }
    }
}

export default preProcStyle;