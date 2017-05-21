import React from "react";

import Teacher from "./Teacher";

export default class TeachersContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            teachers:[{
                id:0,
                name:"default",
                surname:"default"
            }]
        };
    }

    componentWillMount() {
    $.get('http://localhost:8090/api/01/teacher/')
     .done((res) => {
        this.setState({teachers:res});
        console.log(res);
      });
    }

    render() {
        var rows = [];
        for (var i=0; i < this.state.teachers.length; i++) {
            rows.push(<Teacher key={this.state.teachers[i].id.toString()} 
                name={this.state.teachers[i].name}
                surname={this.state.teachers[i].surname}/>);
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}
