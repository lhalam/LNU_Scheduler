import React from "react";

import Subject from "./Subject";

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const marg = {marginBottom: '50px'};

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
    $.get('http://localhost:8090/api/01/subject/')
     .done((res) => {
        this.setState({subjects:res});
       	console.log(res);
      });
	}

    addSubject(event) {
        const _title = this.refs.title.value;
        $.get('http://localhost:8090/api/01/subject/', {action:'add', title:_title})
        .done((res) => {
            this.setState({subjects:res});
            console.log(res);
            alert(`Subject ${_title} will be added.`);
        });
        
        event.preventDefault();
    }

    removeSubject(_title) {
        $.get('http://localhost:8090/api/01/subject/', {action:'remove', title:_title})
        .done((res) => {
            this.setState({subjects:res});
            console.log(res);
            alert(`Subject ${_title} will be removed.`);
        });
    }

    render() {
    	var rows = [];
		for (var i=0; i < this.state.subjects.length; i++) {
			rows.push(<Subject key={this.state.subjects[i].id.toString()} 
				title={this.state.subjects[i].title} 
                removing={this.removeSubject.bind(this)}/>);
		}

        return (
        	<div style={marg}>
                <h4 className="container">List of subjects:</h4>
				{rows}
                <Form inline className="container" onSubmit={this.addSubject.bind(this)}>                    
                    <input className="form-control" type="text" ref="title" placeholder="Subject title" />
                    <Button bsStyle="success" type="submit">Add Subject</Button>
                </Form>
            </div>
        );
    }
}

