import React, { Component } from 'react'
import AnimSquare from '../AnimSquare'

export default class index extends Component {
    render() {
        this.props.style.padding = "0 0";
        this.props.style.width = "40rem";
        return (
            <div {...this.props}>
                <div style={{
                    margin: "2rem 0"
                }}>
                    <AnimSquare style={{
                        width: '6rem',
                        margin: '1rem -1rem -8rem 1rem',
                        background: "#777",
                        animeParms: {
                            translateX: "34rem",
                            backgroundColor: "#333",
                            easing: "easeOutQuart",
                        }
                    }} />
                    <AnimSquare style={{
                        width: '6rem',
                        margin: '1rem 0',
                        background: "#00f",
                        animeParms: {
                            translateX: "34rem",
                            backgroundColor: "#ff0",
                            easing: "easeOutQuart",
                        }
                    }} />
                </div>

                <div style={{
                    margin: "2rem 0"
                }}>
                    <AnimSquare style={{
                        width: '6rem',
                        margin: '1rem -1rem -8rem 1rem',
                        background: "#777",
                        animeParms: {
                            translateX: "34rem",
                            backgroundColor: "#333",
                            easing: "easeInOutSine",
                        }
                    }} />
                    <AnimSquare style={{
                        width: '6rem',
                        margin: '1rem 0',
                        background: "#f00",
                        animeParms: {
                            translateX: "34rem",
                            backgroundColor: "#0ff",
                            easing: "easeInOutSine",
                        }
                    }} />
                </div>

                <div style={{
                    margin: "2rem 0"
                }}>
                    <AnimSquare style={{
                        width: '6rem',
                        margin: '1rem -1rem -8rem 1rem',
                        background: "#777",
                        animeParms: {
                            translateX: "34rem",
                            backgroundColor: "#333",
                            easing: "easeInOutBack",
                        }
                    }} />
                    <AnimSquare style={{
                        width: '6rem',
                        margin: '1rem 0',
                        background: "#0f0",
                        animeParms: {
                            translateX: "34rem",
                            backgroundColor: "#f0f",
                            easing: "easeInOutBack",
                        }
                    }} />
                </div>
            </div>
        )
    }
}
