import React from "react";

export default class Subject extends React.Component {
	constructor(props) {
        super();
        this.state = {
			title:'default'
        };
    }

    render() {
        return (
            <div className="container">
                <h3>Subject</h3>
                <p>Title:{this.props.title}</p>
            </div>
        );
    }
}