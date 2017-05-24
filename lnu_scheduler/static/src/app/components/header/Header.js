import React from 'react';

import { Link } from 'react-router-dom';

import { Nav, NavItem } from 'react-bootstrap';

const header = {
  color: 'white',
  backgroundColor: '#132365',
  height: '45px',
  align: 'center'
};

export default class Header extends React.Component {

	render(){
		return(
			<div>						
	      		<Nav style={header} bsStyle="tabs">
	        		<NavItem eventKey={1} href="/home">Schedule</NavItem>
	        		<NavItem eventKey={2} href="/rooms">Rooms</NavItem>
	        		<NavItem eventKey={3} href="/teachers">Teachers</NavItem>
	        		<NavItem eventKey={4} href="/subjects">Subjects</NavItem>
  			    </Nav>					    					  	
			</div>
		)
	}
}