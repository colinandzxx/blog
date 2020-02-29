import React, { Component } from 'react'
import { Layout, Carousel, Divider, Card } from 'antd';
import {
    Anim1,
    Clock,
    Emoji
} from '../../components';
import './index.less';

import carouselPic1 from "../../assets/images/carousel/1.jpg";
import carouselPic2 from "../../assets/images/carousel/2.jpg";
import carouselPic3 from "../../assets/images/carousel/3.jpg";

const { Content } = Layout;

export default class Home extends Component {
    render() {
        return (
            <Content className="home">
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

                <Divider />

                <Card id="CaseStudy" className="carouselContainer">
                    <h3>PORTFOLIO</h3>
                    <h1>Case study</h1>
                    <p>There will be some cases, but now nothing is here. oops~<Emoji label="Squinting Face with Tongue" symbol="😝" /></p>
                    <Carousel className="carousel" autoplay effect="fade">
                        <div>
                            <img src={carouselPic1} alt="1.jpg"></img>
                        </div>
                        <div>
                            <img src={carouselPic2} alt="2.jpg"></img>
                        </div>
                        <div>
                            <img src={carouselPic3} alt="3.jpg"></img>
                        </div>
                    </Carousel>
                </Card>
            </Content>
        )
    }
}
