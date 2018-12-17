import React from "react";
// import { makeData } from "./DraftTableUtils";
import matchSorter from 'match-sorter'
import ReactTable from "react-table";
import "react-table/react-table.css";



class DraftTableComp extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
    this.state = {
        data: this.props.drafts,
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
              Header: "click on headers to sort or type to filter",
              columns: [
                {
                  Header: "Draft Year",
                  id: "draftYear",
                  maxWidth: 150,
                  accessor: d => d.draft_year,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["draftYear"] }),
                  filterAll: true
                },
                {
                  Header: "Round",
                  id: "round",
                  maxWidth: 100,
                  accessor: d => d.round,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["round"] }),
                  filterAll: true
                },
                {
                    Header: "Number",
                    id: "number",
                    maxWidth: 100,
                    accessor: d => d.number,
                    filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["number"] }),
                    filterAll: true
                },
                {
                    Header: "Team",
                    id: "team_name",
                    accessor: d => d.team,
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
                    maxWidth: 200,
                    accessor: d => d.player_pos,
                    filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["player_pos"] }),
                    filterAll: true
                }
              ]
            }
          ]}
          defaultPageSize={10}
          style={{
            height: "70vh"
          }}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default DraftTableComp;