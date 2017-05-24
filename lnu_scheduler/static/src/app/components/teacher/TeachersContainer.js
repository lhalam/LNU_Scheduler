import React from "react";

import Teacher from "./Teacher";

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const marg = {marginBottom: '50px'};

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
    $.get('http://localhost:8090/api/01/teacher/')
     .done((res) => {
        this.setState({teachers:res});
        console.log(res);
      });
    }

    addTeacher(event) {
        const _fname = this.refs.first_name.value;
        const _mname = this.refs.middle_name.value;
        const _lname = this.refs.last_name.value;
        $.get('http://localhost:8090/api/01/teacher/', {action:'add', 
                                                        first_name:_fname, 
                                                        middle_name:_mname,
                                                        last_name:_lname,})
        .done((res) => {
            this.setState({teachers:res});
            console.log(res);
            alert(`Teacher ${_lname} ${_fname} ${_mname} will be added.`);
        });
        
        event.preventDefault();
    }

    removeTeacher(_fname) {
        $.get('http://localhost:8090/api/01/teacher/', {action:'remove', first_name:_fname})
        .done((res) => {
            this.setState({teachers:res});
            console.log(res);
            alert(`Teacher ${_fname} will be removed.`);
        });
    }


    render() {
        var rows = [];
        for (var i=0; i < this.state.teachers.length; i++) {
            rows.push(<Teacher key={this.state.teachers[i].id.toString()} 
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
                    <Button bsStyle="success" type="submit">Add Teacher</Button>
                </Form>
            </div>
        );
    }
}
