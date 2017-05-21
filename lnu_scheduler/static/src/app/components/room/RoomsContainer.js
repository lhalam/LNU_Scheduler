import React from "react";

import Room from "./Room";

export default class RoomsContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
			rooms:[{name:"default",
					id:0,
					places:0,
					is_free:true
				}]
        };
    }

    componentWillMount() {
    $.get('http://localhost:8090/api/01/room/', { places:19 } )
     .done((res) => {
    	function isBigEnough(value) {
  			return value.places >= 18;
		}
    	
        this.setState({rooms:res.filter(isBigEnough)});
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
