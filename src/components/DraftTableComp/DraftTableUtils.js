
const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const chaDraft = () => {
        this.props.drafts.map((draft, i) => {
        return {
            draftYear: draft.draft_year,
            round: draft.round,
            number: draft.number,
            team_name: draft.team,
            player_name: draft.player_name,
            player_pos: draft.player_pos,
        }
    })
}

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...chaDraft(),
      children: range(10).map(chaDraft)
    };
  });
}
