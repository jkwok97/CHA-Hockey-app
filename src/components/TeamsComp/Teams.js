
var teamsCHA = function() {

    document.querySelector('.container-teams').addEventListener('click', getTeamID);
    document.getElementById('overlay').addEventListener('click', removeOverlay);

    function getTeamID(event) {

        const teamFrame = new Map();
        teamFrame.set('atlanta', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=31&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>');
        teamFrame.set('augusta', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=16&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('cheyenne', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=5&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('cincinnati', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=25&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('greenBay', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=9&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('indianapolis', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=17&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('kelowna', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=32&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('loneStar', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=34&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('louisiana', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=11&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('memphis', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=13&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('milwaukee', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=14&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('oakland', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=15&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('oklahoma', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=12&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('peoria', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=24&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('sanFran', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=8&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('seattle', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=7&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('sCarolina', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=18&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('statenIs', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=23&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('victoria', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=33&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>')
        teamFrame.set('wichita', '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpSpdaAz_Joer_bPx1jtFG3v59VsDaIaQ0FARGIWF7R4M83t73foELctvvEt2RK6kDXDw2c4Fiz_F6/pubhtml?gid=21&amp;single=true&amp;widget=true&amp;headers=false" className="embed-responsive-item scroll-wrapper"></iframe>') 
    
        let teamClicked = event.target.id

        for (let [key, value] of teamFrame.entries()) {
            if (key === `${teamClicked}`) {
                document.querySelector(".frames").innerHTML = `${value}`;
                document.getElementById("overlay").style.display = "block";
                
            } 
        }
    }
    
    function removeOverlay(event) {
        document.getElementById("overlay").style.display = "none";
    }
}

teamsCHA();

