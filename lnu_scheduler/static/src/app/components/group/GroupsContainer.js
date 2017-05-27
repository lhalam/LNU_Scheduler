import React from "react";

import axios from "axios";

import Group from "./Group";

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

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
        axios.get('http://localhost:8090/api/01/group/')
            .then((res) => {
                this.setState({groups:res.data});
                console.log(res);
            });
    }

    addGroup(event) {
        const _name = this.refs.name.value;
        const _students = this.refs.students.value;
        axios.get('http://localhost:8090/api/01/group/', {
            params: {
                action:'add', 
                name:_name, 
                students:_students
            }
        })
        .then((res) => {
            this.setState({groups:res.data});
            console.log(res);
            alert(`Group ${_name} will be added.`);
        });
        
        event.preventDefault();
    }

    removeGroup(_name) {
        axios.get('http://localhost:8090/api/01/group/', {
            params: {
                action:'remove', 
                name:_name
            }
        })
        .then((res) => {
            this.setState({groups:res.data});
            console.log(res);
            alert(`Group ${_name} will be removed.`);
        });
    }

    render() {
        const marg = {marginBottom: '50px'};
        
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
                    <Button bsStyle="primary" type="submit">Add Group</Button>
                </Form>
            </div>
        );
    }
}
