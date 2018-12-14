import React from "react";
// import { makeData } from "./DraftTableUtils";
import matchSorter from 'match-sorter'
import ReactTable from "react-table";
import "react-table/react-table.css";



class DraftTableComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // data: makeData(),
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              columns: [
                {
                  Header: "Draft Year",
                  accessor: "draftYear",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                },
                {
                  Header: "Round",
                  id: "round",
                  accessor: d => d.round,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["round"] }),
                  filterAll: true
                },
                {
                    Header: "Number",
                    id: "number",
                    accessor: d => d.number,
                    filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["number"] }),
                    filterAll: true
                },
                {
                    Header: "Team",
                    id: "team_name",
                    accessor: d => d.team_name,
                    filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["team_name"] }),
                    filterAll: true
                },
                {
                    Header: "Player",
                    id: "player_name",
                    accessor: d => d.player_name,
                    filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["player_name"] }),
                    filterAll: true
                },
                {
                    Header: "Position",
                    id: "player_pos",
                    accessor: d => d.player_pos,
                    filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["player_pos"] }),
                    filterAll: true
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default DraftTableComp;