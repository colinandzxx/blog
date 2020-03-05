import React, { Component } from 'react';
import {
    Carousel,
    Card,
} from 'antd';
import {
    Emoji
} from '../../components';

const carouselPicNames = ["1", "2", "3"];
const carouselPics = carouselPicNames.map(item => require("../../assets/images/carousel/" + item + ".jpg"));



export default class CaseStudy extends Component {
    render() {
        return (
            <Card id="CaseStudy" className="carouselContainer">
                <h3>PORTFOLIO</h3>
                <h1>Case study</h1>
                <p>There will be some cases, but now nothing is here. oops~<Emoji label="Squinting Face with Tongue" symbol="😝" /></p>
                <Carousel className="carousel" autoplay effect="fade">
                    {
                        carouselPics.map((pic, index) => {
                            return (
                                <div key={"div_pic_" + index}>
                                    <img src={pic} alt={"carouselPic_" + index}></img>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </Card>
        )
    }
}