import React, { Component } from 'react';
import {
    Anim1,
    Clock,
} from '../../components';



export default class TopAnim extends Component {
    render() {
        return (
            <div id="TopAnim">
                <div className="animContainer">
                    <div className="cio up">
                        <h1>Yo! Yo! Check it out!</h1>
                        <h1>煎饼果子来一套</h1>
                    </div>
                    <Anim1 className="anim1"
                        style={{
                            // border: "1px solid red",
                            margin: "auto",
                        }} />
                </div>
                <Clock className="clock" />
            </div>
        )
    }
}