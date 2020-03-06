import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import { LazyIcon, LazyProgress } from "../../components";

const aboutContent =
  "It is a long established fact that a reader will" +
  "be distracted by the readable content of a page when looking at its layout." +
  " The point of using Lorem Ipsum is that it has a more-or-less normal distribution.";

const iconUrl = "//at.alicdn.com/t/font_1653660_pzl0t4uvxm.js";

const skills = [
  {
    name: "HTML5",
    percent: 60
  },
  {
    name: "CSS3",
    percent: 60
  },
  {
    name: "React",
    percent: 60
  },
  {
    name: "C/C++",
    percent: 100
  },
  {
    name: "Golang",
    percent: 100
  },
  {
    name: "Rust",
    percent: 80
  },
  {
    name: "Python",
    percent: 70
  }
];

export default class About extends Component {
  render() {
    console.log(skills);
    return (
      <Card id="About" className="aboutContainer">
        <Row>
          <Col span={9}>aaa</Col>
          <Col span={15}>
            <div className="about-content-box">
              <div className="about-content-title">
                <h3>Profile</h3>
                <h2>About Me</h2>
              </div>
              <div className="about-content-text">
                <p>{aboutContent}</p>
              </div>

              <Row>
                <Col span={12} xs={24} sm={24} md={24} lg={12}>
                  <div className="info_item">
                    <LazyIcon
                      className="info_icon"
                      type="icon-personalcenterclick"
                      scriptUrl={iconUrl}
                    />
                    <div className="info_text">
                      <h3>Name</h3>
                      <h4>aiyowei</h4>
                    </div>
                  </div>
                </Col>
                <Col span={12} xs={24} sm={24} md={24} lg={12}>
                  <div className="info_item">
                    <LazyIcon
                      className="info_icon"
                      type="icon-mail"
                      scriptUrl={iconUrl}
                    />
                    <div className="info_text">
                      <h3>Mail</h3>
                      <h4>aiyowei@test.mail</h4>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="about_skill_area">
                {skills.map((skill, index) => {
                  return (
                    <LazyProgress key={"lp-" + index} percent={skill.percent}>
                      <h4
                        style={{
                          width: "4rem",
                          margin: "auto",
                          textAlign: "left"
                        }}
                      >
                        {skill.name}
                      </h4>
                    </LazyProgress>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}
