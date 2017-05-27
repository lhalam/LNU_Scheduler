import React from "react";

import { Label } from 'react-bootstrap';

export default class ScheduleItem extends React.Component {
	constructor(props) {
        super();
        this.state = {
			schedule:{id:0,
					day:0,
					sub_number:0,
					room:{},
					group:{},
					subject:{},
					teacher:{},
			}
		}
    };  

    handleRemove() {
        this.props.removing(this.props.schedule.id);
    }

    render() {
    	const grey = {color: 'grey', fontSize:'11px'};
        const curr = {cursor: 'pointer',
            marginLeft: '10px'};

        return (
            <div>
                <h5>{this.props.schedule.subject.title}
                    <Label style={curr} bsStyle="danger" onClick={this.handleRemove.bind(this)}>X</Label>
                </h5>
                <span><span style={grey}>Teacher:</span> {this.props.schedule.teacher.first_name}</span>
                <span> {this.props.schedule.teacher.middle_name}</span>
                <span> {this.props.schedule.teacher.last_name}</span>
                <p>
                	<span style={grey}>Room:</span> {this.props.schedule.room.name}
                	<span style={grey}>   Group:</span> {this.props.schedule.group.name}
                </p>
            </div>
        );
    }
}
