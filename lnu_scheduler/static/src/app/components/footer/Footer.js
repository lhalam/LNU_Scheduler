import React from 'react';

import { Navbar } from 'react-bootstrap';

export default class Footer extends React.Component {
	render(){
		const footer = {
  			color: 'white',
  			backgroundColor: '#132365',
  			bottom: '-10px',
  			textAlign: 'center',
  			paddingTop: '8px'};
		
		return(
			<div>
				<Navbar fixedBottom style={footer}>© Copyright 2017</Navbar>
			</div>
		)
	}
}