import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './img/cha_logo.jpg';
import TeamsComp from './components/TeamsComp'

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: ''
    }
  }

  onClickTeams = () => {
    this.setState({ display: 'teams' });
  }

  render() {
    let toShow;
    if (this.state.display === 'teams') {
      toShow = 
          <TeamsComp />
      }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="body">
        <nav>
          <div className="row animated slideInLeft">
              <img src={require('./img/cha_logo.jpg')} alt="CHA-logo" className="logo"></img>
              <h5>est.1995</h5>
          </div>
        </nav>
        <div className="heading">
        <h1 className="animated rollIn">Continental Hockey Association</h1>
        </div>
        <div className="rink-text-box">
            <div className="overlay2" id="references"></div>
            <a className="btn btn-ghost animated rollIn" href="./src/Rankings.html" id="stats">Statistics</a>
            <a className="btn btn-ghost animated rollIn" href="#" onClick={this.onClickTeams}>Teams</a>
            <a className="btn btn-ghost animated rollIn" href="#">History</a>
            <a className="btn btn-ghost animated rollIn" href="#">Rules & Prizes</a>
            {/* <a className="btn btn-ghost animated rollIn" href="#">Injuries</a> */}
            <a className="btn btn-ghost animated rollIn" href="#">2018-19 Schedule</a>
        </div>
        <section className="teams"> { toShow } </section>
        </div>
        
      </div>
    );
  }
}

export default App;
