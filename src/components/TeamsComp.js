import React, { Component } from 'react';
import "../App.css";

class TeamsComp extends Component {
    constructor() {
        super()
        this.state = {
          display: ''
        }
    }

    onClickAtl = () => {
        this.setState({ display: 'atlanta' });
      }

    onClickAug = () => {
    this.setState({ display: 'augusta' });
    }

    onClickChy = () => {
        this.setState({ display: 'cheyenne' });
    }

    onClickCin = () => {
        this.setState({ display: 'cincinnati' });
    }

    onClickGB = () => {
        this.setState({ display: 'greenBay' });
    }

    onClickInd = () => {
        this.setState({ display: 'indianapolis' });
    }

    onClickKel = () => {
        this.setState({ display: 'kelowna' });
    }

    onClickLS = () => {
        this.setState({ display: 'loneStar' });
    }

    onClickLou = () => {
        this.setState({ display: 'louisiana' });
    }

    onClickMem = () => {
        this.setState({ display: 'memphis' });
    }

    onClickMil = () => {
        this.setState({ display: 'milwaukee' });
    }

    onClickOak = () => {
        this.setState({ display: 'oakland' });
    }

    onClickOkl = () => {
        this.setState({ display: 'oklahoma' });
    }

    onClickPeo = () => {
        this.setState({ display: 'peoria' });
    }

    onClickSF = () => {
        this.setState({ display: 'sanFran' });
    }

    onClickSea = () => {
        this.setState({ display: 'seattle' });
    }

    onClickSC = () => {
        this.setState({ display: 'sCarolina' });
    }

    onClickSI = () => {
        this.setState({ display: 'statenIs' });
    }

    onClickVic = () => {
        this.setState({ display: 'victoria' });
    }

    onClickWic = () => {
        this.setState({ display: 'wichita' });
    }

    render() {
        let toShow;
        if (this.state.display === 'atlanta') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=31&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'augusta') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=16&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'cheyenne') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=5&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'cincinnati') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=25&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'greenBay') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=9&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'indianapolis') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=17&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'kelowna') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=32&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'loneStar') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=34&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'louisiana') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=11&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'memphis') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=13&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'milwaukee') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=14&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'oakland') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=15&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'oklahoma') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=12&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'peoria') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=24&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'sanFran') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=8&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'seattle') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=7&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'sCarolina') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=18&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'statenIs') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=23&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'victoria') {
            toShow = 
                <iframe className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=33&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        } else if (this.state.display === 'wichita') {
            toShow = 
                <iframe className="embed-responsive-item scroll-wrapper" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=21&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        }
        return (
            <div className="container-teams">
                <img src={require('../img/assassins.jpg')} alt="Oakland Assassins" id="oakland" onClick={this.onClickOak}></img>
                <img src={require('../img/Mountaineers6.jpg')} alt="Kelowna Mountaineers" id="kelowna" onClick={this.onClickKel}></img>
                <img src={require('../img/cocks2.jpg')} alt="San Francisco Fighting Cocks" id="sanFran" onClick={this.onClickSF}></img>
                <img src={require('../img/seattlestorm.jpg')} alt="Seattle Storm" id="seattle" onClick={this.onClickSea}></img>
                <img src={require('../img/Vipers.jpg')} alt="Victoria Vipers" id="victoria" onClick={this.onClickVic}></img>
                <img src={require('../img/Desperado7.jpg')} alt="Cheyenne Desperado" id="cheyenne" onClick={this.onClickChy}></img>
                <img src={require('../img/oilbarons3.jpg')} alt="Oklahoma City Oil Barons" id="oklahoma" onClick={this.onClickOkl}></img>
                <img src={require('../img/Hound4.jpg')} alt="Memphis Hound Dogs" id="memphis" onClick={this.onClickMem}></img>
                <img src={require('../img/wolfpack.jpg')} alt="Wichita Wolfpack" id="wichita" onClick={this.onClickWic}></img>
                <img src={require('../img/Brahmas3.jpg')} alt="Lone Star Brahmas" id="loneStar" onClick={this.onClickLS}></img>
                <img src={require('../img/dragz.jpg')} alt="Milwaukee Ice Dragons" id="milwaukee" onClick={this.onClickMil}></img>
                <img src={require('../img/Goats11.jpg')} alt="Indianapolis Goats" id="indianapolis" onClick={this.onClickInd}></img>
                <img src={require('../img/KillerBees.jpg')} alt="Staten Island Killer Bees" id="statenIs" onClick={this.onClickSI}></img>
                <img src={require('../img/glory2.jpg')} alt="Green Bay Glory" id="greenBay" onClick={this.onClickGB}></img>
                <img src={require('../img/Prowlers2.jpg')} alt="Peoria Prowlers" id="peoria" onClick={this.onClickPeo}></img>
                <img src={require('../img/Cyclones4.jpg')} alt="Cincinnati Cylcones" id="cincinnati" onClick={this.onClickCin}></img>
                <img src={require('../img/Flashers2.jpg')} alt="Atlanta Flashers" id="atlanta" onClick={this.onClickAtl}></img>
                <img src={require('../img/rays.jpg')} alt="South Carolina Stingrays" id="sCarolina" onClick={this.onClickSC}></img>
                <img src={require('../img/voodoo2.jpg')} alt="Louisiana Voodoo" id="louisiana" onClick={this.onClickLou}></img>
                <img src={require('../img/Green Jackets.jpg')} alt="Augusta Green Jackets" id="augusta" onClick={this.onClickAug}></img>
            
                <div className="embed-responsive embed-responsive-16by9 scroll-wrapper" id="frame"> {toShow} </div>  
            </div>  
        );
    }
}

export default TeamsComp;