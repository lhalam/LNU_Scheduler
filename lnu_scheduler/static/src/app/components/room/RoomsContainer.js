import React from "react";

import Room from "./Room";

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const marg = {marginBottom: '50px'};

export default class RoomsContainer extends React.Component {
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
    $.ajax ({ 
            method: "GET",
            url:'http://localhost:8090/api/01/room/',
            contentType: "application/json"
        }).done((res) => {
        this.setState({rooms:res});
       	console.log(res);
      });
	}

    addRoom(event) {
        const _name = this.refs.name.value;
        const _places = this.refs.places.value;
        $.get('http://localhost:8090/api/01/room/', {action:'add', name:_name, places:_places})
        .done((res) => {
            this.setState({rooms:res});
            console.log(res);
            alert(`Room ${_name} will be added.`);
        });
        
        event.preventDefault();
    }

    removeRoom(_name) {
        $.get('http://localhost:8090/api/01/room/', {action:'remove', name:_name})
        .done((res) => {
            this.setState({rooms:res});
            console.log(res);
            alert(`Room ${_name} will be removed.`);
        });
    }

    render() {
    	var rows = [];
		for (var i=0; i < this.state.rooms.length; i++) {
			rows.push(<Room key={this.state.rooms[i].id.toString()} 
				name={this.state.rooms[i].name} 
				id={this.state.rooms[i].id} 
				places={this.state.rooms[i].places}
                removing={this.removeRoom.bind(this)}/>);
		}

        return (
        	<div style={marg}>
                <h4 className="container">List of rooms:</h4>
                {rows}
                <Form inline className="container" onSubmit={this.addRoom.bind(this)}>                    
                    <input className="form-control" type="text" ref="name" placeholder="Room name:" />
                    <input className="form-control" type="number" ref="places" placeholder="Places:" />
                    <Button bsStyle="success" type="submit">Add Room</Button>
                </Form>
            </div>
        );
    }
}
