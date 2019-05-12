import React from "react";
import matchSorter from 'match-sorter'
import ReactTable from "react-table";
import "react-table/react-table.css";

class ChampionsTableComp extends React.Component {
  constructor(props) {
    super();
    this.props = props
    this.state = {
        data: this.props.champions,
    };
  }

  render() {
    console.log(this.state);
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
                  Header: "Year",
                  id: "year_won",
                  maxWidth: 150,
                  accessor: d => d.year_won,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["year_won"] }),
                  filterAll: true
                },
                {
                  Header: "Name",
                  id: "owner_name",
                  maxWidth: 300,
                  accessor: d => d.owner_name,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["owner_name"] }),
                  filterAll: true
                },
                {
                    Header: "Team",
                    id: "team_name",
                    maxWidth: 500,
                    accessor: d => d.team_name,
                    filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["team_name"] }),
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

export default ChampionsTableComp;