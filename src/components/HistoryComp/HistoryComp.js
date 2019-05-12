import React, { Component } from 'react';
import './HistoryComp.css'
import DraftTableComp from '../DraftTableComp/DraftTableComp';
import ChampionsTableComp from '../ChampionsTableComp/ChampionsTableComp';

class HistoryComp extends Component {
    constructor() {
        super()
        this.state = {
          display: 'categories',
          champions: [],
          drafts: []
        }
    }

    componentDidMount = () => {
        fetch(`https://cha-hockey-app-server.herokuapp.com/drafts`)
          .then(response => response.json())
          .then(data => this.setState({drafts: data}))
          .catch(err => console.log(err,'error'));

        fetch(`https://cha-hockey-app-server.herokuapp.com/champions`)
          .then(response => response.json())
          .then(data => this.setState({champions: data}))
          .catch(err => console.log(err,'error'));
    }

    onClickTrophy = () => {
        this.setState({display: 'champions'});
    }

    onClickDrafts = () => {
        this.setState({display: 'drafts'});
    }

    // onClickRecords = () => {
    //     this.setState({display: 'records'});
    // }

    render() {
        if (this.state.display === 'categories' ) {
            return (
                <div className="history-categories">
                    <div className="container-history">
                        <h3 className="title">CHA Hall Of Champions</h3>
                        <img src={require('./libertycup.jpg')} alt="trophy" onClick={this.onClickTrophy} id="libertyCup"></img>
                    </div>
                    <div className="container-draftpicks-section">
                        <h3 className="title">CHA Past DraftPicks</h3>
                        <img src={require('./Drafts.jpg')} alt="drafts" onClick={this.onClickDrafts} id="drafts"></img>
                    </div>
                    {/* <div className="container-records">
                        <h3 id="title">CHA Record Books</h3>
                        <img src={require('./recordBook.jpg')} alt="record-book" onClick={this.onClickRecords} id="records"></img>
                    </div> */}
                </div>
            );
        }
        else if (this.state.display === 'champions') {
            return (
                <div className="container-history">
                    <h3 onClick={this.onClickDrafts} className="draftTitle">CHA Champions</h3>
                    <div className="championsTable">
                        <ChampionsTableComp champions={this.state.champions}/>
                    </div>
                </div>
            )
        } else if (this.state.display === 'drafts') { 
            return (
                <div className="container-draftpicks">
                    <h3 onClick={this.onClickTrophy} className="draftTitle">CHA Drafts</h3>
                    <div className="draftTable">
                        <DraftTableComp drafts={this.state.drafts}/>
                    </div>
                </div>
            )
        } else if (this.state.display === 'records') {
            return (
                <div>
                    Hello World
                </div>
            )
        }
    }
}

export default HistoryComp;