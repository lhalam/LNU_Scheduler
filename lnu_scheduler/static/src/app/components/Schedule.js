import React from "react";

import ScheduleItem from "./ScheduleItem";

import { Form, FormGroup, Button, Table, SplitButton, MenuItem, FormControl, ControlLabel } from 'react-bootstrap';

export default class Schedule extends React.Component {
    constructor(props) {
        super();
        this.state = {
			schedule:[{id:0,
					day:0,
					sub_number:0,
					room_id:0,
					subject_id:0,
					teacher_id:0
				}]
        };
    }

    componentWillMount() {
    $.get('http://localhost:8090/api/01/room/')
     .done((res) => {
        this.setState({schedule:res});
       	console.log(res);
      });
	}

    showSchedule(event) {
    	const _name = this.refs.name.value;
    	var id = 0;
    	$.get('http://localhost:8090/api/01/room/', {name:_name})
     		.done((res) => {
        	id=res[0].id;
       		console.log(res);
       		console.log(id);
      	});
		
     	

        $.get('http://localhost:8090/api/01/schedule/', {id:id})
        .done((res) => {
            this.setState({schedule:res});
            console.log(res);
        });

   event.preventDefault();
    }

    render() {
    	var days = ['Monday',
    				'Tuesday',
    				'Wednasday',
    				'Thursday',
    				'Friday']

    	var sub_nums = ['8:30-9:50',
    				    '10:10-11:30',
    					'11:50-13:10',
    					'13:30-14:50',
    					'15:05-16:25',
    					'16:40-18:00',
    					'18:10-19:30',
    					'19:40-21:00']

    	var day = [];
    	var h_week = [];
    	var b_week = [];

    	for(var i=0; i < days.length; i++){
    		h_week.push(<th>{days[i]}</th>);
    		b_week.push(<td><ScheduleItem key={i.toString()}/></td>);
    	}

    	for(var i=0; i < sub_nums.length; i++){	
    		day.push(<tr>{b_week}</tr>);
    	}

    	var rooms = [];

    	for(var i=0; i < this.state.schedule.length; i++){	
    		rooms.push(<option ref="name" >{this.state.schedule[i].name}</option>);
    	}


        return (
        <div>

			<FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" onChange={this.showSchedule.bind(this)}>
    	{rooms}
      </FormControl>
    </FormGroup>


			<br/>
			<hr/>
			<br/>

			<Table responsive>
			    <thead>
			      <tr>
			        {h_week}
			      </tr>
			    </thead>
			    <tbody>
			      {day}
			    </tbody>
			</Table>
		</div>
        );
    }
}
