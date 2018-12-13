import React, { Component } from 'react';
import './ScheduleComp.css'

class ScheduleComp extends Component {
    constructor() {
        super()
        this.state = {
          display: ''
        }
    }

    render() {
        return (
            <div className="container-schedule">
                Hello World!<br></br>
                FUTURE COMPONENT OF A CALENDER SYSTEM WITH CLICKABLE DATES FOR SCHEDULE AND GAME LOGS
            </div>  
        );
    }
}

export default ScheduleComp;