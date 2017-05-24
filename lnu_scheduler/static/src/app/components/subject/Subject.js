import React from "react";

import { Label } from 'react-bootstrap';

const curr = {cursor: 'pointer',
              marginLeft: '10px'};
const grey = {color: 'grey', fontSize:'11px'};
const border = {border: '1px solid black', 
                borderRadius:'5px',
                marginBottom: '5px',
                marginLeft: '112px'};

export default class Subject extends React.Component {
	constructor(props) {
        super();
        this.state = {
			title:'default',
            id:0
        };
    }

    handleRemove() {
        this.props.removing(this.props.title);
    }

    render() {
        return (
            <div style={border} className="container"> 
                <h5><span style={grey}>Title: </span>{this.props.title} 
                    <Label style={curr} bsStyle="danger" onClick={this.handleRemove.bind(this)}>X</Label>
                </h5>
            </div>
        );
    }
}

