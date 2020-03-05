import React, { Component } from 'react';
import {
    Card,
    Row,
    Col,
    Icon
} from 'antd';

const aboutContent = 'It is a long established fact that a reader will \
be distracted by the readable content of a page when looking at its layout.\
 The point of using Lorem Ipsum is that it has a more-or-less normal distribution.';



export default class About extends Component {
    render() {
        const IconFont = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1653660_pzl0t4uvxm.js'
        });

        return (
            <Card id="About" className="aboutContainer">
                <Row>
                    <Col span={9}>aaa</Col>
                    <Col span={15}>
                        <div className="minax_content_box">
                            <div className="content_title">
                                <span>Profile</span>
                                <h2>About Me</h2>
                            </div>
                            <div className="about_content">
                                <p>{aboutContent}</p>
                            </div>
                            {/* <div className="about_information">
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
                            </div> */}

                            <div>
                                <Row>
                                    <Col className="info_icon" span={4} style={{ textAlign: "left" }} md={4} sm={24} xs={24}>
                                        <IconFont className="footer-icon-font" type='icon-personalcenterclick' style={{background:"#f00"}} />
                                    </Col>
                                    <Col className="info_text" span={20} style={{ textAlign: "left" }} md={20} sm={24} xs={24}>
                                        <span>Name</span>
                                        <h5>aiyowei</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="info_icon" span={4} style={{ textAlign: "left" }} md={4} sm={24} xs={24}>
                                        <IconFont className="footer-icon-font" type='icon-personalcenterclick' />
                                    </Col>
                                    <Col className="info_text" span={20} style={{ textAlign: "left" }} md={20} sm={24} xs={24}>
                                        <span>Email</span>
                                        <h5>aiyowei@fortest.com</h5>
                                    </Col>
                                </Row>
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
        )
    }
}