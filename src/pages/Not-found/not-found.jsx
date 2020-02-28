import React, { Component } from 'react';
import './svg404.less';
import Svg_404 from './svg404';

/*
前台404页面
 */
export default class NotFound extends Component {

	goHome = () => {
		// this.props.setHeadTitle('首页')
		// this.props.history.replace('/home')
	}

	componentDidUpdate() {
		var path = document.getElementById('tail');
		path.setAttribute('d', 'M89,315c2.2-15.2-23-13.2-21.6,4.8c1.7,22.3,24.4,22.1,42.5,9.1c10.8-7.8,15.3-1.8,19.1,1.1 c2.3,1.7,6.7,3.3,11-3');
	}

	render() {
		console.log(Svg_404);
		return (
			<Svg_404 />		
		)			
	}
}

// export default connect(
//   null,
//   {setHeadTitle}
// )(NotFound)