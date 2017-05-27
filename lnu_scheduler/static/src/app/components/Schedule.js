import React from "react";

import axios from "axios";

import ScheduleItem from "./ScheduleItem";

import { Form, FormGroup, Button, Table, DropdownButton, MenuItem, Modal } from 'react-bootstrap';

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

			subjects:[{
				title:"default",
				id:0
			}],

            teachers:[{
                id:0,
                first_name:"default",
                middle_name:"default",
                last_name:"default"
            }],

			groups:[{
				name:"default",
				id:0,
				students:0
			}],
		
			dropTitle:"Select Room",

			dropTitle1:"Select Subject",
			dropTitle2:"Select Teacher",
			dropTitle3:"Select Group",
		
			day:0,
			sub_num:0,
			subject_id:0,
			teacher_id:0,
			room_id:0,
			group_id:0,
		
			showModal: false,
			disButton: true	
        };
    }

    componentWillMount() {
    	axios.get('http://localhost:8090/api/01/room/')
     		.then((res) => {
        		this.setState({rooms:res.data});
       			console.log(res);
      		});

     	axios.get('http://localhost:8090/api/01/subject/')
     		.then((res) => {
				this.setState({subjects:res.data});
       			console.log(res);
      		});	

     	axios.get('http://localhost:8090/api/01/teacher/')
     		.then((res) => {
				this.setState({teachers:res.data});
       			console.log(res);
      		});	

     	axios.get('http://localhost:8090/api/01/group/')
     		.then((res) => {
				this.setState({groups:res.data});
       			console.log(res);
      		});	
	}

    showSchedule(selected_room) {
    	let id = -1;
    	for(let i = 0; i < this.state.rooms.length; i++)
    	{
    		if(selected_room == this.state.rooms[i].name)
    		{
    			id = this.state.rooms[i].id;
    			break;
    		}
    	}

    	console.log(selected_room);
    	console.log(id);

    	this.setState({dropTitle:selected_room});
    	axios.get('http://localhost:8090/api/01/schedule/', {
    		params:{
    			room:selected_room
    		}
    	})
     	.then((res) => {
            this.setState({schedule:res.data});
            this.setState({room_id:id});
            this.setState({disButton:false});
            console.log(res);
        });
    }

    selectSubject(selected_subject) {
    	let id = -1;
    	for(let i = 0; i < this.state.subjects.length; i++)
    	{
    		if(selected_subject === this.state.subjects[i].title)
    		{
    			id = this.state.subjects[i].id;
    			break;
    		}
    	}
    	this.setState({subject_id:id});
    	this.setState({dropTitle1:selected_subject});
    }

    selectTeacher(selected_teacher) {
    	let id = -1;

    	for(let i = 0; i < this.state.teachers.length; i++)
    	{
    		const teacher = this.state.teachers[i].first_name + " " + 
    		this.state.teachers[i].middle_name + " " + 
    		this.state.teachers[i].last_name;

    		if(selected_teacher === teacher)
    		{
    			id = this.state.teachers[i].id;
    			break;
    		}
    	}
    	this.setState({teacher_id:id});
    	this.setState({dropTitle2:selected_teacher});
    }

    selectGroup(selected_group) {
    	let id = -1;
    	for(let i = 0; i < this.state.groups.length; i++)
    	{
    		if(selected_group === this.state.groups[i].name)
    		{
    			id = this.state.groups[i].id;
    			break;
    		}
    	}
    	this.setState({group_id:id});
    	this.setState({dropTitle3:selected_group});
    }

    addItem() {
    	axios.get('http://localhost:8090/api/01/schedule/', {
            params: {
                action:'add', 
                day:this.state.day,
                sub_number:this.state.sub_num,
                subject_id:this.state.subject_id,
                teacher_id:this.state.teacher_id,
                room_id:this.state.room_id,
                group_id:this.state.group_id
                }
            })
            .then((res) => {
                this.setState({schedule:res.data});
                console.log(res.data);
            });

        this.setState({ showModal: false});
    }

    removeItem(_id) {
        axios.get('http://localhost:8090/api/01/schedule/', {
            params: {
                action:'remove', 
                id:_id,
                room_id:this.state.room_id
            	}
        	})
        	.then((res) => {
            	this.setState({schedule:res.data});
            	console.log(res);
        	});
    }

    render() {
    	const border = {border: '1px solid black'};

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

    	var rooms = [];
    	for(var i=0; i < this.state.rooms.length; i++){	
    		rooms.push(<MenuItem eventKey={this.state.rooms[i].name}>{this.state.rooms[i].name}</MenuItem>);
    	}

		var subjects = [];
		for(var i=0; i < this.state.subjects.length; i++){	
    		subjects.push(<MenuItem eventKey={this.state.subjects[i].title}>{this.state.subjects[i].title}</MenuItem>);
    	}

    	var teachers = [];
    	for(var i=0; i < this.state.teachers.length; i++){	
    		teachers.push(<MenuItem eventKey={this.state.teachers[i].first_name + " " + 
    		this.state.teachers[i].middle_name + " " + 
    		this.state.teachers[i].last_name}>
    			{this.state.teachers[i].first_name + " "}
    			{this.state.teachers[i].middle_name + " "}
    			{this.state.teachers[i].last_name}
    		</MenuItem>);
    	}

    	var groups = [];
    	for(var i=0; i < this.state.groups.length; i++){	
    		groups.push(<MenuItem eventKey={this.state.groups[i].name}>{this.state.groups[i].name}</MenuItem>);
    	}
		
		const that = this;
    	function handler(i,j) {
  			return function() {
  				that.setState({day:j});
  				that.setState({sub_num:i});
  				that.setState({showModal:true});
  			};
		}

    	let close = () => this.setState({ showModal: false});

    	for(var i=0; i < sub_nums.length; i++){	
    		b_week = [<td>{i+1}. {sub_nums[i]}</td>];
        	for(var j=0; j < days.length; j++){
        		let item = {id:0};
        		for(var k=0; k < this.state.schedule.length; k++)
        		{	
        			const item1 = this.state.schedule[k];
        			if(item1.day == j && item1.sub_number == i)
        			{
        				item = item1;
        				break;
        			}
        		}
        		if(item.id === 0)
        		{
        			b_week.push(<td style={border}>
        							<Button bsSize="sm" 
        									bsStyle="primary" 
        									type="submit" 
        									onClick={handler(i,j)}
        									disabled={this.state.disButton}>Add
        							</Button>
        						</td>);
        		}
        		else
        		{
        			b_week.push(<td style={border}><ScheduleItem schedule={item}
        				removing={this.removeItem.bind(this)}/></td>);
        		}
    		}
    		day.push(<tr>{b_week}</tr>);
    	}

        return (
	        <div>
				<DropdownButton title={this.state.dropTitle} id='drop' onSelect={this.showSchedule.bind(this)}>
	    			{rooms}
	        	</DropdownButton>
				<br/>
				<Modal
          			show={this.state.showModal}
          			onHide={close}
          			container={this}
          			aria-labelledby="contained-modal-title"
        			>
          			<Modal.Header closeButton>
            		<Modal.Title id="contained-modal-title">Adding schedule item</Modal.Title>
          			</Modal.Header>
          			<Modal.Body>                   
		                <DropdownButton title={this.state.dropTitle1} id='sub' onSelect={this.selectSubject.bind(this)}>
		   	    			{subjects}
	        			</DropdownButton>
						<DropdownButton title={this.state.dropTitle2} id='teacher' onSelect={this.selectTeacher.bind(this)}>
							{teachers}
	        			</DropdownButton>
						<DropdownButton title={this.state.dropTitle3} id='group' onSelect={this.selectGroup.bind(this)}>
							{groups}
	        			</DropdownButton>            	
          			</Modal.Body>
          			<Modal.Footer>
          				<Button onClick={close}>Cancel</Button>
            			<Button bsStyle="primary" onClick={this.addItem.bind(this)}>Add</Button>
          			</Modal.Footer>
        		</Modal>
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
