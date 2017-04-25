import React from "react";

export class Room extends React.Component {
    constructor(props) {
        super();
        this.state = {
			id: 0,
			name: ''
        };
    }

    componentWillMount() {
    $.get(`http://localhost:8090/api/01/room/`)
      .then(res => {
        this.setState({ 
        	id:res[0].id, 
        	name:res[0].name });
       	console.log(res[0]);
      });
	}

    render() {
        return (
            <div>
                <h1>Room</h1>
                <p>Name: {this.state.name}, ID: {this.state.id}</p>
            </div>
        );
    }
}

Room.propTypes = {
	id: React.PropTypes.number,
    name: React.PropTypes.string
};