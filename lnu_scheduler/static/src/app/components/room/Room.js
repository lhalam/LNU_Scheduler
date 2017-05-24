import React from "react";

import { Label } from 'react-bootstrap';

const curr = {cursor: 'pointer',
              marginLeft: '10px'};
const grey = {color: 'grey', fontSize:'11px'};
const border = {border: '1px solid black', 
                borderRadius:'5px',
                marginBottom: '5px',
                marginLeft: '112px'};

export default class Room extends React.Component {
	constructor(props) {
        super();
        this.state = {
			name:'default', 
			id:0,
			places:0
        };
    }

    handleRemove() {
        this.props.removing(this.props.name);
    }

    render() {
        return (
            <div style={border} className="container"> 
                <h5><span style={grey}>Name: </span> {this.props.name}  
                    <Label style={curr} bsStyle="danger" onClick={this.handleRemove.bind(this)}>X</Label>
                </h5>
                <h5><span style={grey}>Places available: </span> {this.props.places}</h5>
            </div>
        );
    }
}