import React from "react";

import Group from "./Group";

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const marg = {marginBottom: '50px'};

export default class GroupsContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
			groups:[{name:"default",
					id:0,
					students:0
				}]
        };
    }

    componentWillMount() {
    $.ajax ({ 
            method: "GET",
            url:'http://localhost:8090/api/01/group/',
            contentType: "application/json"
        }).done((res) => {
        this.setState({groups:res});
       	console.log(res);
      });
	}

    addGroup(event) {
        const _name = this.refs.name.value;
        const _students = this.refs.students.value;
        $.get('http://localhost:8090/api/01/group/', {action:'add', name:_name, students:_students})
        .done((res) => {
            this.setState({groups:res});
            console.log(res);
            alert(`Group ${_name} will be added.`);
        });
        
        event.preventDefault();
    }

    removeGroup(_name) {
        $.get('http://localhost:8090/api/01/group/', {action:'remove', name:_name})
        .done((res) => {
            this.setState({groups:res});
            console.log(res);
            alert(`Group ${_name} will be removed.`);
        });
    }

    render() {
    	var rows = [];
		for (var i=0; i < this.state.groups.length; i++) {
			rows.push(<Group key={this.state.groups[i].id.toString()} 
				name={this.state.groups[i].name} 
				id={this.state.groups[i].id} 
				students={this.state.groups[i].students}
                removing={this.removeGroup.bind(this)}/>);
		}

        return (
        	<div style={marg}>
                <h4 className="container">List of groups:</h4>
                {rows}
                <Form inline className="container" onSubmit={this.addGroup.bind(this)}>                    
                    <input className="form-control" type="text" ref="name" placeholder="Group name:" />
                    <input className="form-control" type="number" ref="students" placeholder="Students:" />
                    <Button bsStyle="success" type="submit">Add Group</Button>
                </Form>
            </div>
        );
    }
}
