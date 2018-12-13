import React, { Component } from 'react';
import './StatsComp.css'

class StatsComp extends Component {
    constructor() {
        super()
        this.state = {
          display: ''
        }
    }

    render() {
        return (
            <div className="container-stats">
                Hello World!
                FUTURE COMPONENT OF A SORTABLE TABLE BY STATISTICAL CATEGORY
                CALLS TO POSTGRES DB
                DROP DOWN MENUS
            </div>  
        );
    }
}

export default StatsComp;