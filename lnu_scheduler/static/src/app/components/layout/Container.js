import React from "react";

import Room from "./Room";

export default class Container extends React.Component {
    constructor(props) {
        super();
        this.state = {
			rooms:[{name:"default",
					id:0,
					places:0
				}]
        };
    }

    componentWillMount() {
    $.get(`http://localhost:8090/api/01/room/`)
      .then(res => {
        this.setState({rooms:res});
       	console.log(res);
      });
	}

    render() {
    	var rows = [];
		for (var i=0; i < this.state.rooms.length; i++) {
			rows.push(<Room key={this.state.rooms[i].id.toString()} 
				name={this.state.rooms[i].name} 
				id={this.state.rooms[i].id} 
				places={this.state.rooms[i].places}/>);
		}

        return (
        	<div>
				{rows}
            </div>
        );
    }
}
