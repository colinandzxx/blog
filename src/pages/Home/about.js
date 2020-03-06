import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import { LazyIcon, LazyProgress } from "../../components";

import testimg from "../../assets/images/carousel/1.jpg";

const aboutContent =
  "这是一啪啦关于我的莫名其妙的奇怪介绍。" +
  "不看也罢，实在不知道写点什么，但是最终还是写了些东西在这里，实在是不好意思啊。" +
  "所以我觉得还是努力地在这里写点什么好了。";

const music = (
<p style={{textAlign:"center"}}>Code Monkey get up get coffee<br />
Code Monkey go to job<br />
Code Monkey have boring meeting<br />
With boring manager Rob<br />
Rob say Code Monkey very diligent<br />
But his output stink<br />
His code not &ldquo;functional&rdquo; or &ldquo;elegant&rdquo;<br />
What do Code Monkey think?<br />
Code Monkey think maybe manager want to write god damned login page himself<br />
Code Monkey not say it out loud<br />
Code Monkey not crazy, just proud<br />
Code Monkey like Fritos<br />
Code Monkey like Tab and Mountain Dew<br />
Code Monkey very simple man<br />
With big warm fuzzy secret heart<br />
Code Monkey like you<br />
Code Monkey like you<br />
Code Monkey hang around at front desk<br />
Tell you sweater look nice<br />
Code Monkey offer buy you soda<br />
Bring you cup, bring you ice<br />
You say no thank you for the soda cause<br />
Soda make you fat<br />
Anyway you busy with the telephone<br />
No time for chat<br />
Code Monkey have long walk back to cubicle he sit down pretend to work<br />
Code Monkey not thinking so straight<br />
Code Monkey not feeling so great<br />
Code Monkey like Fritos<br />
Code Monkey like Tab and Mountain Dew<br />
Code Monkey very simple man<br />
With big warm fuzzy secret heart<br />
Code Monkey like you<br />
Code Monkey like you a lot<br />
Code Monkey have every reason<br />
To get out this place<br />
Code Monkey just keep on working<br />
See your soft pretty face<br />
Much rather wake up, eat a coffee cake<br />
Take bath, take nap<br />
This job &ldquo;fulfilling in creative way&rdquo;<br />
Such a load of crap<br />
Code Monkey think someday he have everything even pretty girl like you<br />
Code Monkey just waiting for now<br />
Code Monkey say someday, somehow<br />
Code Monkey like Fritos<br />
Code Monkey like Tab and Mountain Dew<br />
Code Monkey very simple man<br />
With big warm fuzzy secret heart<br />
Code Monkey like you<br />
Code Monkey like you</p>
)

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
        <Row >
          <Col span={9} xs={24} sm={24} md={9} lg={9}>
            <img src={testimg} alt="testimg" style={{width:"90%", margin:"auto"}}/>
          </Col>
          <Col span={15} xs={24} sm={24} md={15} lg={15}>
            <div className="about-content-box">
              <div className="about-content-title">
                <h3>Profile</h3>
                <h2>About Me</h2>
              </div>
              <div className="about-content-text">
                <p style={{fontFamily:"Microsoft YaHei"}}>{aboutContent}</p>
                {/* {music} */}
              </div>

              <Row style={{margin:"2rem 0"}}>
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
