import React from "react";

export default class Room extends React.Component {
	constructor(props) {
        super();
        this.state = {
			name:'default', 
			id:0,
			places:0
        };
    }

    render() {
        return (
            <div className="container">
                <h3>Room</h3>
                <p>Name:{this.props.name}</p>
                <p>ID: {this.props.id}</p>
                <p>Places available: {this.props.places}</p>
            </div>
        );
    }
}