import React, { Component } from 'react';
import './HistoryComp.css'
import DraftTableComp from '../DraftTableComp/DraftTableComp';

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
        fetch(`http://localhost:3000/drafts`)
          .then(response => response.json())
          .then(data => this.setState({drafts: data}))
          .catch(err => console.log(err,'error'))
    }

    onClickTrophy = () => {
        this.setState({display: 'champions'});
        fetch(`http://localhost:3000/champions`)
          .then(response => response.json())
          .then(data => this.setState({champions: data}))
          .catch(err => console.log(err,'error'))
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
                        <h3 id="title">CHA Hall Of Champions</h3>
                        <img src={require('./libertycup.jpg')} alt="trophy" onClick={this.onClickTrophy} id="libertyCup"></img>
                    </div>
                    <div className="container-draftpicks">
                        <h3 id="title">CHA Past DraftPicks</h3>
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
                    <h3 onClick={this.onClickDrafts}>CHA Hall Of Champions</h3>
                        <table className="center">
                            <tbody>
                                <tr>
                                    <th>Year</th>
                                    <th>Team Name</th>
                                    <th>Owner</th>
                                </tr>
                                    {
                                    this.state.champions.map((champ, i) => {
                                        return <tr key={champ.id}>
                                                <td key={champ.id}>{champ.year_won}</td>
                                                <td>{champ.team_name}</td>
                                                <td>{champ.owner_name}</td>
                                                </tr>
                                    })
                                    }
                            </tbody>
                        </table> 
                </div>
            )
        } else if (this.state.display === 'drafts') { 
            return (
                <div className="container-draftpicks">
                    <h3 onClick={this.onClickTrophy}>CHA Drafts</h3>
                    <DraftTableComp drafts={this.state.drafts}/>
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