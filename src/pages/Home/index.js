import React, { Component } from 'react'
import { Layout } from 'antd';
import {
    Anim1,
    Clock
} from '../../components';
import './index.less';

const { Content } = Layout;

export default class Home extends Component {
    render() {
        return (
            <Content>
                <div className="cio up">
                    <h1>Yo! Yo! Check it out!</h1>
                    <h1>煎饼果子来一套</h1>
                </div>
                <Anim1 className="anim1"
                    style={{
                        // border: "1px solid red",
                        margin: "auto auto",
                    }} />
                <Clock className="clock" />
            </Content>
        )
    }
}
