import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Layout,
    Divider,
} from 'antd';
import {
    animateScroll as scroll,
    scroller
} from 'react-scroll';
import './index.less';
import CaseStudy from './caseStudy';
import About from './about';
import TopAnim from './topAnim';

const { Content } = Layout;



@connect(
    (state) => {
        return { scrollTo: state.scrollTo };
    },
    null
)
class Home extends Component {
    constructor() {
        super();
        console.log('Home page constructor');
    }

    componentDidMount() {
        console.log('Home page componentDidMount');
        console.log(this.props.scrollTo);
        
        // to top
        document.getElementById('root').scrollIntoView(true);

        const scrollTo = this.props.scrollTo
        if (scrollTo) {
            scroller.scrollTo(scrollTo, {
                duration: 2000,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }

    componentDidUpdate() {
        console.log('Home page componentDidUpdate');
        console.log(this.props.scrollTo);

        const scrollTo = this.props.scrollTo
        if (scrollTo) {
            scroller.scrollTo(scrollTo, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        } else {
            scroll.scrollToTop();
        }
    }

    render() {
        // ReactDOM.findDOMNode(this).scrollTop = 0;
        // console.log(carouselPics);

        return (
            <Content className="home">
                <TopAnim />
                <Divider />
                <About />
                <Divider />
                <CaseStudy />
            </Content>
        )
    }
}

export default Home;