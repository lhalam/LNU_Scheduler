import React from "react";

import axios from "axios";

import Teacher from "./Teacher";

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class TeachersContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            teachers:[{
                id:0,
                first_name:"default",
                middle_name:"default",
                last_name:"default"
            }]
        };
    }

    componentWillMount() {
        axios.get('http://localhost:8090/api/01/teacher/')
            .then((res) => {
                this.setState({teachers:res.data});
                console.log(res);
            });
    }

    addTeacher(event) {
        const _fname = this.refs.first_name.value;
        const _mname = this.refs.middle_name.value;
        const _lname = this.refs.last_name.value;

        axios.get('http://localhost:8090/api/01/teacher/', {
            params: { 
                action:'add', 
                first_name:_fname, 
                middle_name:_mname,
                last_name:_lname,}
            })
            .then((res) => {
                this.setState({teachers:res.data});
                console.log(res);
                alert(`Teacher ${_lname} ${_fname} ${_mname} will be added.`);
        });

        event.preventDefault();
    }

    removeTeacher(_id) {
        axios.get('http://localhost:8090/api/01/teacher/', {
            params: {
                action:'remove', 
                id:_id
            }
        })
        .then((res) => {
            this.setState({teachers:res.data});
            console.log(res);
            alert(`Teacher with id ${_id} will be removed.`);
        });
    }

    render() {
        const marg = {marginBottom: '50px'};

        var rows = [];
        for (var i=0; i < this.state.teachers.length; i++) {
            rows.push(<Teacher key={this.state.teachers[i].id.toString()} 
                id={this.state.teachers[i].id}
                first_name={this.state.teachers[i].first_name}
                middle_name={this.state.teachers[i].middle_name}
                last_name={this.state.teachers[i].last_name}
                removing={this.removeTeacher.bind(this)}/>);
        }

        return (
            <div style={marg}>
                <h4 className="container">List of teachers:</h4>
                {rows}
                <Form inline className="container" onSubmit={this.addTeacher.bind(this)}>                    
                    <input className="form-control" type="text" ref="first_name" placeholder="First name:" />
                    <input className="form-control" type="text" ref="middle_name" placeholder="Middle name:" />
                    <input className="form-control" type="text" ref="last_name" placeholder="Last name:" />
                    <Button bsStyle="primary" type="submit">Add Teacher</Button>
                </Form>
            </div>
        );
    }
}
