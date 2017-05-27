import React from "react";

import axios from "axios";

import Room from "./Room";

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

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
        axios.get('http://localhost:8090/api/01/room/')
            .then((res) => {
                this.setState({rooms:res.data});
                console.log(res);
            });
    }

    addRoom(event) {
        const _name = this.refs.name.value;
        const _places = this.refs.places.value;
        axios.get('http://localhost:8090/api/01/room/', {
            params: {
                action:'add', 
                name:_name, 
                places:_places
            }
        })
        .then((res) => {
            this.setState({rooms:res.data});
            console.log(res);
            alert(`Room ${_name} will be added.`);
        });
        
        event.preventDefault();
    }

    removeRoom(_name) {
        axios.get('http://localhost:8090/api/01/room/', {
            params: {
                action:'remove', 
                name:_name
            }
        })
        .then((res) => {
            this.setState({rooms:res.data});
            console.log(res);
            alert(`Room ${_name} will be removed.`);
        });
    }

    render() {
        const marg = {marginBottom: '50px'};
        
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
                    <Button bsStyle="primary" type="submit">Add Room</Button>
                </Form>
            </div>
        );
    }
}
