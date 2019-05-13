import React, { Component } from 'react';
import "./TeamsComp.css";

class TeamsComp extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //       display: 'teamsShow'
    //     }
    // }

    teamsCHA = (event) =>   {
        let teamClicked = event.target.id

        const teamFrame = new Map();
            teamFrame.set('atlanta', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=31&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>');
            teamFrame.set('augusta', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=16&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('cheyenne', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=5&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('cincinnati', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=25&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('greenBay', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=9&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('indianapolis', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=17&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('kelowna', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=32&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('loneStar', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=34&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('mississauga', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=11&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('memphis', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=13&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('milwaukee', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=14&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('oakland', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=15&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('oklahoma', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=12&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('peoria', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=24&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('sanFran', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=8&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('seattle', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=7&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('sCarolina', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=18&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('statenIs', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=23&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('victoria', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=33&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')
            teamFrame.set('wichita', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=21&amp;single=true&amp;widget=true&amp;headers=false" height="85%" width="85%" className="embed-responsive-item scroll-wrapper" id="image"></iframe>')

            for (let [key, value] of teamFrame.entries()) {
                if (key === `${teamClicked}`) {
                    document.querySelector(".frames").innerHTML = `${value}`;
                    document.getElementById("overlay").style.display = "block";
                } 
            }
        }

        removeOverlay = (event) => {
                document.getElementById("overlay").style.display = "none";
            }

    render() { 
        return (
            <div className="container-teams">
                <div id="overlay" onClick={this.removeOverlay}>
                    <div className="frames"></div>
                </div>
                <div className="teamLogos">
                    <div className="west-conference-teams-container animated slideInLeft">
                        <h1 className="title-text">WESTERN CONFERENCE</h1>
                        <div className="northWest-teams-container animated rotateInDownLeft">
                            <h3 className="title-text2">NORTHWEST DIVISION</h3>
                            <img src={require('./img/assassins.jpg')} alt="Oakland Assassins" id="oakland" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Oakland Assassins"></img>
                            <img src={require('./img/Mountaineers6.jpg')} alt="Kelowna Mountaineers" id="kelowna" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Kelowna Mountaineers"></img>
                            <img src={require('./img/cocks2.jpg')} alt="San Francisco Fighting Cocks" id="sanFran" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="San Francisco Fighting Cocks"></img>
                            <img src={require('./img/seattlestorm.jpg')} alt="Seattle Storm" id="seattle" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Seattle Storm"></img>
                            <img src={require('./img/Vipers.jpg')} alt="Victoria Vipers" id="victoria" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Victoria Vipers"></img>
                        </div>  
                        <div className="southWest-teams-container animated rotateInUpLeft">
                            <h3 className="title-text2">SOUTHWEST DIVISION</h3>
                            <img src={require('./img/Desperado7.jpg')} alt="Cheyenne Desperado" id="cheyenne" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Cheyenne Desperado"></img>
                            <img src={require('./img/oilbarons3.jpg')} alt="Oklahoma City Oil Barons" id="oklahoma" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Oklahoma City Oil Barons"></img>
                            <img src={require('./img/Hound4.jpg')} alt="Memphis Hound Dogs" id="memphis" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Memphis Hound Dogs"></img>
                            <img src={require('./img/wolfpack.jpg')} alt="Wichita Wolfpack" id="wichita" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Wichita Wolfpack"></img>
                            <img src={require('./img/Brahmas3.jpg')} alt="Lone Star Brahmas" id="loneStar" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Lone Star Brahmas"></img>
                        </div>
                    </div>
                    <div className="east-conference-teams-container animated slideInRight">
                        <h1 className="title-text">EASTERN CONFERENCE</h1>
                        <div className="northEast-teams-container animated rotateInDownRight">
                            <h3 className="title-text2">NORTHEAST DIVISION</h3>
                            <img src={require('./img/dragz.jpg')} alt="Milwaukee Ice Dragons" id="milwaukee" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Milwaukee Ice Dragons"></img>
                            <img src={require('./img/Goats11.jpg')} alt="Indianapolis Goats" id="indianapolis" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Indianapolis Goats"></img>
                            <img src={require('./img/NorthStars.jpg')} alt="Mississauga North Stars" id="mississauga" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Mississauaga North Stars"></img>
                            <img src={require('./img/glory2.jpg')} alt="Green Bay Glory" id="greenBay" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Green Bay Glory"></img>
                            <img src={require('./img/Prowlers2.jpg')} alt="Peoria Prowlers" id="peoria" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Peoria Prowlers"></img>
                        </div>
                        <div className="southEast-teams-container animated rotateInUpRight">
                            <h3 className="title-text2">SOUTHEAST DIVISION</h3>
                            <img src={require('./img/Cyclones4.jpg')} alt="Cincinnati Cylcones" id="cincinnati" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Cincinnati Cyclones"></img>
                            <img src={require('./img/Flashers2.jpg')} alt="Atlanta Flashers" id="atlanta" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Atlanta Flashers"></img>
                            <img src={require('./img/rays.jpg')} alt="South Carolina Stingrays" id="sCarolina" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="South Carolina Stingrays"></img>
                            <img src={require('./img/KillerBees.jpg')} alt="Staten Island Killer Bees" id="statenIs" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Staten Island Killer Bees"></img>
                            <img src={require('./img/Green Jackets.jpg')} alt="Augusta Green Jackets" id="augusta" onClick={this.teamsCHA} data-toggle="tooltip" data-placement="bottom" title="Augusta Green Jackets"></img>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default TeamsComp;
