import React, { Component } from 'react'
import {
    Layout,
    Carousel,
    Divider,
    Card,
    Row,
    Col
} from 'antd';
import {
    Anim1,
    Clock,
    Emoji
} from '../../components';
// import ScrollableAnchor from 'react-scrollable-anchor';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './index.less';

import carouselPic1 from "../../assets/images/carousel/1.jpg";
import carouselPic2 from "../../assets/images/carousel/2.jpg";
import carouselPic3 from "../../assets/images/carousel/3.jpg";

const { Content } = Layout;

export default class Home extends Component {
    componentDidMount() {
        console.log('componentDidMount');

        // document.querySelector('#TopAnim').scrollIntoView(true);        
        scroller.scrollTo('About', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');

        // document.querySelector('#TopAnim').scrollIntoView(true);
        scroller.scrollTo('About', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    render() {
        return (
            <Content className="home">
                <Element name="TopAnim" className="animContainer">
                    <div className="cio up">
                        <h1>Yo! Yo! Check it out!</h1>
                        <h1>煎饼果子来一套</h1>
                    </div>
                    <Anim1 className="anim1"
                        style={{
                            // border: "1px solid red",
                            margin: "auto",
                        }} />
                </Element>

                <Clock className="clock" />

                <Divider />

                <Element name="About">
                    <Card className="aboutContainer">
                        <Row>
                            <Col span={10}>aaa</Col>
                            <Col span={14}>
                                <div className="minax_content_box">
                                    <div className="content_title">
                                        <span>Profile</span>
                                        <h2>About Me</h2>
                                    </div>
                                    <div className="about_content">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                    </div>
                                    <div className="about_information">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="single_info">
                                                    <div className="info_icon">
                                                        <i className="fas fa-user"></i>
                                                    </div>
                                                    <div className="info_text">
                                                        <span>Full Name</span>
                                                        <h5>Minan Alex</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single_info">
                                                    <div className="info_icon">
                                                        <i className="fas fa-phone-alt"></i>
                                                    </div>
                                                    <div className="info_text">
                                                        <span>Phone Number</span>
                                                        <h5>+346-24234-2211</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single_info">
                                                    <div className="info_icon">
                                                        <i className="fab fa-skype"></i>
                                                    </div>
                                                    <div className="info_text">
                                                        <span>Skype</span>
                                                        <h5>minan.123</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single_info">
                                                    <div className="info_icon">
                                                        <i className="fas fa-envelope">
                                                        </i>
                                                    </div>
                                                    <div className="info_text">
                                                        <span>Email</span>
                                                        <h5>demo.minan@gmail.com</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about_skill_area">
                                        <div className="single_bar">
                                            <div className="progress_title">
                                                <h5>HTML5<span>90%</span></h5>
                                            </div>
                                            <div className="progress">
                                                {/* <div className="progress-bar wow slideInLeft" style="width: 95%; visibility: visible; animation-name: slideInLeft;"> */}
                                                <div className="progress-bar wow slideInLeft">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_bar">
                                            <div className="progress_title">
                                                <h5>CSS3<span>85%</span></h5>
                                            </div>
                                            <div className="progress">
                                                {/* <div className="progress-bar wow slideInLeft" style="width: 85%; visibility: visible; animation-name: slideInLeft;"> */}
                                                <div className="progress-bar wow slideInLeft">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_bar">
                                            <div className="progress_title">
                                                <h5>PHP<span>70%</span></h5>
                                            </div>
                                            <div className="progress">
                                                {/* <div className="progress-bar wow slideInLeft" style="width: 70%; visibility: visible; animation-name: slideInLeft;"> */}
                                                <div className="progress-bar wow slideInLeft">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_bar">
                                            <div className="progress_title">
                                                <h5>Wordpress<span>75%</span></h5>
                                            </div>
                                            <div className="progress">
                                                {/* <div className="progress-bar wow slideInLeft" style="width: 75%; visibility: visible; animation-name: slideInLeft;"> */}
                                                <div className="progress-bar wow slideInLeft">
                                                </div></div></div><div className="single_bar">
                                            <div className="progress_title">
                                                <h5>Photoshop<span>95%</span></h5>
                                            </div>
                                            <div className="progress">
                                                {/* <div className="progress-bar wow slideInLeft" style="width: 95%; visibility: visible; animation-name: slideInLeft;"> */}
                                                <div className="progress-bar wow slideInLeft">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Element>

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
