import React, { Component } from 'react';
import './HistoryComp.css'

class HistoryComp extends Component {
    constructor() {
        super()
        this.state = {
          display: '',
          champions: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/champions`)
          .then(response => response.json())
          .then(data => this.setState({champions: data}))
          .catch(err => console.log(err,'error'))
    }

    onClickTrophy = () => {
        this.setState({display: 'champions'});
    }

    render() {
        if (this.state.display === 'champions') {
            return (
                <div className="container-history">
                    <h3>CHA Hall Of Champions</h3>
                        <table className="center">
                            <tbody>
                                <tr>
                                    <th>Year</th>
                                    <th>Team Name</th>
                                    <th>Owner</th>
                                </tr>
                                    {
                                    this.state.champions.reverse().map((champ, i) => {
                                        return <tr key={champ.id}>
                                                <td key={champ.id}>{champ.year_won}</td>
                                                <td>{champ.team_name}</td>
                                                <td>{champ.owner}</td>
                                                </tr>
                                    })
                                    }
                            </tbody>
                        </table> 
                </div>
            )
        } else {
            return (
                <div className="history-categories">
                    <div className="container-history">
                        <h3 id="hallTitle">CHA Hall Of Champions</h3>
                        <img src={require('./libertycup.jpg')} alt="trophy" onClick={this.onClickTrophy} id="libertyCup"></img><br></br>
                    </div>
                    <div className="container-draftpicks">
                        <h3 id="pickTitle">CHA Past DraftPicks</h3>
                        <img src={require('./Drafts.jpg')} alt="trophy" onClick={this.onClickTrophy} id="drafts"></img><br></br>
                    </div>
                </div>
            );
        }
    }
}

export default HistoryComp;