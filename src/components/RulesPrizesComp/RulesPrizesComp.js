import React, { Component } from 'react';
import './RulesPrizesComp.css'

class RulesPrizesComp extends Component {
    constructor() {
        super()
        this.state = {
          display: ''
        }
    }

    render() {
        return (
            <div className="container-rulesPrizes">
                Hello World!
                Rules & Prizes
            </div>  
        );
    }
}

export default RulesPrizesComp;