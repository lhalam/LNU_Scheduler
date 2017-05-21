import React from 'react';

import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	render(){
		return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
  					<div className="container">
   						<Link to="/home">Schedule</Link>
   						<Link to="/rooms">Rooms</Link>
   						<Link to="/teachers">Teachers</Link>
   						<Link to="/subjects">Subjects</Link>
  					</div>
				</nav>
			</div>
		)
	}
}