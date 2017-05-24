import React from "react";

export default class ScheduleItem extends React.Component {
	constructor(props) {
        super();
        this.state = {
			schedule:{id:0,
					day:0,
					sub_number:0,
					room_id:0,
					subject_id:0,
					teacher_id:0
				}
        };
    }

    render() {
        return (
            <div>
                <h5>hhh</h5>
            </div>
        );
    }
}
