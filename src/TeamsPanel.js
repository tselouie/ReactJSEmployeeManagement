import React, { Component } from 'react';
import axios from 'axios';


class TeamsPanel extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }

  componentDidMount() {

    axios.get('https://floating-bayou-71862.herokuapp.com/teams').then((res) => {
      this.setState({ teams: res.data });
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (<div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Teams</h3>
      </div>
      <div className="panel-body">
        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <tbody>

              {this.state.teams.map((team, index) => {
                return (
                  <tr key={index}>
                    <td>{team.TeamName}</td>
                    <td>{team.Employees.length} Employees</td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
        <a href="/teams" className="btn btn-primary form-control">View All Team Data</a>
      </div>
    </div>);

  }
}

export default TeamsPanel;