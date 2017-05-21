import React from "react";

export default class Teacher extends React.Component {
	constructor(props) {
        super();
        this.state = {
			name:'default', 
			surname:'default'
        };
    }

    render() {
        return (
            <div className="container">
                <h3>Teacher</h3>
                <p>Name: {this.props.name}</p>
                <p>Surname: {this.props.surname}</p>
            </div>
        );
    }
}