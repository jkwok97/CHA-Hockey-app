import React, { Component } from 'react';
import './css/App.css';
import './img/cha_logo.jpg';
import TeamsComp from './components/TeamsComp/TeamsComp';
import StatsComp from './components/StatsComp/StatsComp';
import HistoryComp from './components/HistoryComp/HistoryComp';
import RulesPrizesComp from './components/RulesPrizesComp/RulesPrizesComp';
import ScheduleComp from './components/ScheduleComp/ScheduleComp';

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: '',
      input: ''
    }
  }

  onClickTeams = () => {
    this.setState({ display: 'teams' });
  }

  onClickStats = () => {
    this.setState({ display: 'stats' });
  }

  onClickHistory = () => {
    this.setState({ display: 'history' });
  }

  onClickRulesPrizes = () => {
    this.setState({ display: 'rulesPrizes' });
  }

  onClickSchedule = () => {
    this.setState({ display: 'schedule' });
  }

  render() {
    let toShow;
    if (this.state.display === 'stats') {
      toShow = 
        <StatsComp />
    } else if (this.state.display === 'history') {
      toShow = 
        <HistoryComp />
    } else if (this.state.display === 'rulesPrizes') {
      toShow = 
        <RulesPrizesComp />
    } else if (this.state.display === 'schedule') {
      toShow =
        <ScheduleComp />
    } else if (this.state.display === 'teams') {
      toShow = '';
    }
    
    return (
      <div className="App">

        <div className="header-container">
          <div className="logo-container animated slideInLeft" onClick={this.onClickTeams}>
            <img src={require('./img/cha_logo.jpg')} alt="CHA-logo" className="logo"></img>
            <p className="logo-text">est.1995</p>
          </div>
          <div className="header">
            <h1 className="header-text animated rollIn">CONTINENTAL HOCKEY ASSOCIATION</h1>
          </div>
        </div>

        <div className="rink-text-box">
          <div className="navagation" id="references"></div>
          <button className="btn-ghost animated rollIn" onClick={this.onClickStats}id="stats">Statistics</button>
          {/* <button className="btn-ghost animated rollIn" onClick={this.onClickTeams}>Teams</button> */}
          <button className="btn-ghost animated rollIn" onClick={this.onClickHistory}>History</button>
          <button className="btn-ghost animated rollIn" onClick={this.onClickRulesPrizes}>Rules & Prizes</button>
          <button className="btn-ghost animated rollIn" onClick={this.onClickSchedule}>Schedule</button>
        </div>

        <section className="sectionShow">
         { toShow }
         <TeamsComp />
        </section>
        
      </div>
    );
  }
}

export default App;
