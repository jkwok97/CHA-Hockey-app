
const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const chaDraft = (drafts) => { 
        return {
            draftYear: drafts.draft_year,
            round: drafts.round,
            number: drafts.number,
            team_name: drafts.team,
            player_name: drafts.player_name,
            player_pos: drafts.player_pos,
        }
}

export function makeData(d) {
        console.log(d.drafts[0].draft_year)
        console.log(d.drafts)
        return range(d.drafts).map(d => {
            return {
              ...chaDraft(d),
              children: range(10).map(chaDraft(d))
            };
        });
}
