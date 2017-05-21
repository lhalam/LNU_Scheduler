import React from "react";

import Subject from "./Subject";

export default class SubjectsContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
			subjects:[{
                name:"default",
				id:0,
				places:0,
				is_free:true
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

    render() {
    	var rows = [];
		for (var i=0; i < this.state.subjects.length; i++) {
			rows.push(<Subject key={this.state.subjects[i].id.toString()} 
				title={this.state.subjects[i].title}/>);
		}

        return (
        	<div>
				{rows}
            </div>
        );
    }
}
