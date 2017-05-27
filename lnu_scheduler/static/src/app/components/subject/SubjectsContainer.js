import React from "react";

import axios from "axios";

import Subject from "./Subject";

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class SubjectsContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
			subjects:[{
                title:"default",
				id:0
			}]
        };
    }

    componentWillMount() {
        axios.get('http://localhost:8090/api/01/subject/')
            .then((res) => {
                this.setState({subjects:res.data});
       	        console.log(res);
            });
	}

    addSubject(event) {
        const _title = this.refs.title.value;
        axios.get('http://localhost:8090/api/01/subject/', {
            params: {
                action:'add', 
                title:_title
                }
            })
            .then((res) => {
                this.setState({subjects:res.data});
                console.log(res);
                alert(`Subject ${_title} will be added.`);
            });
        
        event.preventDefault();
    }

    removeSubject(_title) {
        axios.get('http://localhost:8090/api/01/subject/', {
            params: {
                action:'remove', 
                title:_title
                }
            })
            .then((res) => {
                this.setState({subjects:res.data});
                console.log(res);
                alert(`Subject ${_title} will be removed.`);
            });
    }

    render() {
        const marg = {marginBottom: '50px'};
        
    	var rows = [];
		for (var i=0; i < this.state.subjects.length; i++) {
			rows.push(<Subject key={this.state.subjects[i].id.toString()} 
				title={this.state.subjects[i].title} 
                id={this.state.subjects[i].id}
                removing={this.removeSubject.bind(this)}/>);
		}

        return (
        	<div style={marg}>
                <h4 className="container">List of subjects:</h4>
				{rows}
                <Form inline className="container" onSubmit={this.addSubject.bind(this)}>                    
                    <input className="form-control" type="text" ref="title" placeholder="Subject title" />
                    <Button bsStyle="primary" type="submit">Add Subject</Button>
                </Form>
            </div>
        );
    }
}

