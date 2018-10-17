import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
    }
    componentDidMount() {
        axios.get('https://floating-bayou-71862.herokuapp.com/teams').then((res) => {

            this.setState({teams: res.data });

        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (

            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.teams.map((team, index) => {

                                return (
                                    <tr key={index}>
                                        <td>{team.TeamName}</td>
                                        <td><ul>
                                            {team.Projects.map((project, index) => {
                                                return (
                                                    <li>{project.ProjectName}</li>
                                                );
                                            })}
                                        </ul></td>
                                        <td>{team.Employees.length} Employees</td>
                                        <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </MainContainer>

        );
    }
}

export default Teams;