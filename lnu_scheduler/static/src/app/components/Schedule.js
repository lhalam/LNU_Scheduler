import React from "react";

import ScheduleItem from "./ScheduleItem";

import { Form, FormGroup, Button, Table, DropdownButton, MenuItem, FormControl, ControlLabel } from 'react-bootstrap';

const border = {
	border: '1px solid black'
} 

export default class Schedule extends React.Component {
    constructor(props) {
        super();
        this.state = {
			schedule:[{id:0,
					day:0,
					sub_number:0,
					room:{},
					group:{},
					subject:{},
					teacher:{}
				}],

			rooms:[{
				name:"default",
				id:0,
				places:0
			}],
		
			dropTitle:"Select Room"			
        };
    }

    componentWillMount() {
    $.get('http://localhost:8090/api/01/room/')
     .done((res) => {
        this.setState({rooms:res});
       	console.log(res);
      });
	}

    showSchedule(selected_room) {
    	this.setState({dropTitle:selected_room});
    	var id = 0;
    	$.get('http://localhost:8090/api/01/schedule/', {room:selected_room})
     		.done((res) => {
            this.setState({schedule:res});
            console.log(res);
        	});
    }

    render() {
    	var days = ['Monday',
    				'Tuesday',
    				'Wednesday',
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
    	var h_week = [<td>Time</td>];
    	var b_week = [];

		for(var j=0; j < days.length; j++){
    		h_week.push(<th>{days[j]}</th>);
    	}

    	for(var i=0; i < sub_nums.length; i++){	
    		b_week = [<td>{i+1}. {sub_nums[i]}</td>];
        	for(var j=0; j < days.length; j++){
        		let item = {id:0};
        		for(var k=0; k < this.state.schedule.length; k++)
        		{	
        			const item1 = this.state.schedule[k];
        			if(item1.day == j+1 && item1.sub_number == i+1)
        			{
        				item = item1;
        				break;
        			}
        		}
        		if(item.id === 0)
        			b_week.push(<td style={border} key={j.toString()}></td>);
        		else
        			b_week.push(<td style={border}><ScheduleItem schedule={item}/></td>);
    		}
    		day.push(<tr>{b_week}</tr>);
    	}

    	var rooms = [];
    	for(var i=0; i < this.state.rooms.length; i++){	
    		rooms.push(<MenuItem eventKey={this.state.rooms[i].name}>{this.state.rooms[i].name}</MenuItem>);
    	}


        return (
	        <div>
				<DropdownButton title={this.state.dropTitle} id='drop' onSelect={this.showSchedule.bind(this)}>
	    			{rooms}
	        	</DropdownButton>
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
