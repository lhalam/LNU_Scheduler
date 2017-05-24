import React from 'react';

import { Navbar } from 'react-bootstrap';

const footer = {
  color: 'white',
  backgroundColor: '#132365',
  bottom: '-10px',
  textAlign: 'center',
  paddingTop: '8px'
};


export default class Footer extends React.Component {
	render(){
		return(
			<div>
				<Navbar fixedBottom style={footer}>Copyright 2017</Navbar>
			</div>
		)
	}
}