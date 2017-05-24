import React from "react";

import { Label } from 'react-bootstrap';

const curr = {cursor: 'pointer',
              marginLeft: '10px'};
const grey = {color: 'grey', fontSize:'11px'};
const border = {border: '1px solid black', 
                borderRadius:'5px',
                marginBottom: '5px',
                marginLeft: '112px'};

export default class Teacher extends React.Component {
	constructor(props) {
        super();
        this.state = {
            id:0,
			first_name:'default', 
			middle_name:'default',
            last_name:'default'
        };
    }

    handleRemove() {
        this.props.removing(this.props.first_name);
    }

    render() {
        return (
            <div style={border} className="container"> 
                <h5><span style={grey}>First name: </span> {this.props.first_name}  
                    <Label style={curr} bsStyle="danger" onClick={this.handleRemove.bind(this)}>X</Label>
                </h5>
                <h5><span style={grey}>Middle name: </span> {this.props.middle_name}</h5>
                <h5><span style={grey}>Last name: </span> {this.props.last_name}</h5>
            </div>
        );
    }
}