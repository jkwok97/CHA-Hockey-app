import React, { Component } from 'react';
import './RulesPrizesComp.css';

class RulesPrizesComp extends Component {
    constructor() {
        super()
        this.state = {
          display: ''
        }
    }

    removeOverlay = (event) => {
        document.getElementById("winnings-overlay").style.display = "none";
        document.getElementById("equal-overlay").style.display = "none";
        document.getElementById("playoff-overlay").style.display = "none";
        document.getElementById("draft-overlay").style.display = "none";
        document.getElementById("goalie-overlay").style.display = "none";
        document.getElementById("player-overlay").style.display = "none";
        document.getElementById("roster-overlay").style.display = "none";
        document.getElementById("waiver-overlay").style.display = "none";
    }

    displayOverlayWinnings = () => {
        document.getElementById("winnings-overlay").style.display = "block";
    }

    displayOverlayEqual = () => {
        document.getElementById("equal-overlay").style.display = "block";
    }

    displayOverlayPlayoff = () => {
        document.getElementById("playoff-overlay").style.display = "block";
    }

    displayOverlayDraft = () => {
        document.getElementById("draft-overlay").style.display = "block";
    }

    displayOverlayGoalie = () => {
        document.getElementById("goalie-overlay").style.display = "block";
    }

    displayOverlayPlayer = () => {
        document.getElementById("player-overlay").style.display = "block";
    }

    displayOverlayRoster = () => {
        document.getElementById("roster-overlay").style.display = "block";
    }

    displayOverlayWaiver = () => {
        document.getElementById("waiver-overlay").style.display = "block";
    }

    render() {
        return (
            <div className="container-rulesPrizes">
                <div className="container-rules-individual">
                    <div id="winnings-overlay" onClick={this.removeOverlay}>
                        <div id="winnings">
                            <h3 className="rules-title">CHA Winnings Allotment</h3>
                            <li>Liberty Cup Champ - $300</li>
                            <li>Liberty Cup Runner Up - $150</li>
                            <li>Regular Season Winner - $50</li>
                            <li>Division Champion - $50/each</li>
                            <li>CHA Leading Scorer - $50</li>
                            <li>CHA Top Defenseman - $50</li>
                            <li>CHA Top Goalie - $50</li>
                            <li>CHA Top Rookie - $50</li>
                            <li>CHA Top G.M. - $50</li>
                            <li>Website Maintenance - $50</li>
                        </div>
                    </div>
                    <div onClick={this.displayOverlayWinnings} className="icon-container">
                        <img src={require('./img/001-championship-trophy.svg')} alt="trophy" className="rulesImg"></img>
                        <p className="rules-p">CHA Winnings Allotment</p>
                    </div>
                </div>
                <div className="container-rules-individual">
                    <div id="equal-overlay" onClick={this.removeOverlay}>
                        <div id="per">
                            <h3 className="rules-title">Player Equalization Rule</h3>
                            <li>Any skater under 41 NHL games played or any goaltender under 35 NHL games played is subject to the player equalizer rule (PER), also known as the 110% rule.</li>
                            <li>Subject players may only play the number of their previous season's NHL games played total plus 10% during the CHA's regular season.</li>
                            <li>Ex. A player who appeared in 25 NHL games is eligible to play 28 CHA regular season games. Fractions will be rounded up.</li>
                            <li>Any GM who violates the 'PER' will have the offending player returned into the free agent pool. That player would not be available until the following Entry Draft.</li>
                        </div>
                    </div>
                    <div onClick={this.displayOverlayEqual} className="icon-container">
                        <img src={require('./img/002-hockey.svg')} alt="trophy" className="rulesImg"></img>
                        <p className="rules-p">Player Equalization Rule(PER)</p>
                    </div>
                </div>
                <div className="container-rules-individual">
                    <div id="playoff-overlay" onClick={this.removeOverlay}>
                        <div id="per-playoff">
                            <h3 className="rules-title">Player Playoff Eligibility</h3>
                            <li>Skaters under 41 NHL games played are not eligible until the 2nd round.</li>
                            <li>Skaters under 31 NHL games played are not eligible until the 3rd round.</li>
                            <li>Skaters under 21 NHL games played are not eligible until the Finals.</li>
                            <li>Starting goaltenders in the playoffs must have a minimum of 35 NHL games played.</li>
                            <li>Goalies under 35 NHL games played are available in any/all rounds of the playoffs as injury replacements only.</li>
                        </div>
                    </div>
                    <div  onClick={this.displayOverlayPlayoff} className="icon-container">
                        <img src={require('./img/005-puck.svg')} alt="trophy" className="rulesImg"></img>
                        <p className="rules-p">Playoff Eligibility</p>
                    </div> 
                </div>
                <div className="container-rules-individual">
                    <div id="draft-overlay" onClick={this.removeOverlay}>
                        <div id="rules-draft">
                            <h3 className="rules-title">CHA Draft Lottery</h3>
                            <ul>
                            <li>The bottom 9 teams in the regular season qualify for the draft lottery.</li>
                            <li>The number of teams eligible is based on the percentage of total NHL teams eligible for the NHL draft lottery.</li>
                            <li>All eligible teams qualify for the 1st overall selection.</li>
                            <li>No team can worsen their draft position by more than one spot.</li>
                            <li>Odds of improving one's draft position are based upon final regular season positioning.</li>
                            <li>Odds of obtaining the 1st overall selection are as follows:</li>
                                <ul>
                                    <li>20th - 35%</li>
                                    <li>19th - 22%</li>
                                    <li>18th - 13%</li>
                                    <li>17th - 9%</li>
                                    <li>16th - 7%</li>
                                    <li>15th - 5%</li>
                                    <li>14th - 4%</li>
                                    <li>13th - 3%</li>
                                    <li>12th - 2%</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div onClick={this.displayOverlayDraft} className="icon-container">
                        <img src={require('./img/004-lottery.svg')} alt="trophy" className="rulesImg"></img>
                        <p className="rules-p">CHA Draft Lottery</p>
                    </div>
                </div>
                <div className="container-rules-individual">
                    <div id="goalie-overlay" onClick={this.removeOverlay}>
                        <div id="rules-goalie">
                            <h3 className="rules-title">Emergency Goaltender Rule (EGR)</h3>
                            <li>Teams may carry no more than three and no less than two goaltenders at any given time.</li>
                            <li>Any team opting to carry three goaltenders is eligible for the Emergency Goaltender Rule.</li>
                            <li>In the case of an EGR eligible team losing all three goaltenders to injury, said team will receive the worst available goaltender from the waiver pool on loan until at least one of said teams roster goaltenders become available.</li>
                            <li>Should another EGR eligible team require this service while the worst waiver pool goaltender is already in use, the next worst goaltender will be loaned and so on and so forth.</li>
                            <li>Any team opting to carry only two goaltenders is not eligible for the EGR.</li>
                            <li>In the case of a non-EGR eligible team losing both its goaltenders to injury, said team will have a concurrently scratched roster player play goal.</li>
                            <li>During the playoffs, any goaltender qualifies as a backup regardless of NHL games played.</li>
                            <li>Should a team's starting goaltender get injured, any roster goaltender then becomes available to start until the starter returns.</li>
                            <li>The EGR applies in the playoffs as well.</li>
                        </div>
                    </div>
                    <div onClick={this.displayOverlayGoalie} className="icon-container">
                        <img src={require('./img/003-ice-hockey.svg')} alt="trophy" className="rulesImg"></img>
                        <p className="rules-p">Emergency Goaltender Rule</p>
                    </div> 
                </div>
                <div className="container-rules-individual">
                    <div id="player-overlay" onClick={this.removeOverlay}>
                        <div id="rules-player">
                            <h3 className="rules-title">Player Protection Rule</h3>
                            <ul>
                                <li>If a CHA player does not play in the minimum required NHL games for CHA game disk eligibility, he is subject to the Player Protection Rule.</li>
                                <li>The General Manager with the player's rights has 3 options:</li>
                                <ol>
                                    <li>Pay a $10 retainer fee (due with the following years dues) and not have the player count towards his/her roster maximum or salary cap.</li>
                                    <li>Do not pay the $10 retainer fee.  Instead, keep the player as a roster player counting towards the team's salary cap and roster maximum. This option is only available if the player has an NHL salary for that season. If the player is in another league for that season, the GM can select option 1 or 3.</li>
                                    <li>Do neither.  The player would be released and considered eligible for the CHA entry draft when/if he returns to the CHA game disk.</li>
                                </ol>
                            </ul>
                        </div>
                    </div>
                    <div onClick={this.displayOverlayPlayer} className="icon-container">
                        <img src={require('./img/002-hockey.svg')} alt="trophy" className="rulesImg"></img>
                        <p className="rules-p">Player Protection Rule</p>
                    </div> 
                </div>
                <div className="container-rules-individual">
                    <div id="roster-overlay" onClick={this.removeOverlay}>
                        <div id="rules-roster">
                            <h3 className="rules-title">Roster Maximums and Minimums</h3>
                            <li>CHA rosters may comprise of a maximum of 30 skaters, including at least 2 (but no more than 3) goaltenders (see Emergency Goaltender Rule).</li>
                            <li>CHA rosters must have a minimum of 24 players (including goaltenders).</li>
                            <li>Roster maximum and salary cap only apply during the season.</li>
                        </div>
                    </div>  
                    <div onClick={this.displayOverlayRoster} className="icon-container">
                        <img src={require('./img/002-hockey.svg')} alt="trophy" className="rulesImg"></img>
                        <p className="rules-p">Roster Maximums and Minimums</p>
                    </div> 
                </div>
                <div className="container-rules-individual">
                    <div id="waiver-overlay" onClick={this.removeOverlay}>
                        <div id="rules-waiver">
                            <h3 className="rules-title">Waiver Wire Rules</h3>
                            <li>Waiver claims will be made Sundays at 2 week intervals throughout the regular season (there may be occurrences when this number varies).</li>
                            <li>The first waiver claim of every year will be the first weekend immediately following the preseason.</li>
                            <li>The waiver wire will consist of all players on the disk not belonging to a CHA team.</li>
                            <li>All claims must have been sent (via Slack) by no later than 11:59 MST Saturday evening.</li>
                            <li>Claim priority will be determined initially by team standings for the year prior.  Once a successful claim has been made, teams then drop to the bottom of the waiver priority list.  Teams will subsequently then only climb the priority list once another team with a higher priority makes a successful claim.</li>
                            <li>All teams may participate in making a waiver claim.</li>
                            <li>Waiver priority only takes effect when two or more teams make a claim for the same player.</li>
                            <li>More than one player may be submitted for in the same claim.  In such situations, claims must be formed in such a way that the highest prioritized player is first followed by second highest and so on and so forth.</li>
                            <li>Please try to restrict your player claims to no more than five players at one time.</li>
                            <li>In the case of a successful claim, the selected player(s) must be retained for the duration of at least one waiver interval (roughly 2 weeks).</li>
                            <li>If a team claim brings roster totals to more than the league roster maximum (30 players) or to a total causing a salary cap infringement, players must be dropped by the day of the next set of games.  If no drops are made, the league will perform the transactions by proxy.</li>
                            <li>Waiver claim positions may not be traded.</li>
                        </div>
                    </div>
                    <div onClick={this.displayOverlayWaiver} className="icon-container">
                        <img src={require('./img/005-puck.svg')} alt="trophy" className="rulesImg"></img>
                        <p className="rules-p">Waiver Wire</p>
                    </div>
                </div>
            </div>  
        );
    }
}

export default RulesPrizesComp;