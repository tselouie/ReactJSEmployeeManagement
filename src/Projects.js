import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';
import moment from 'moment';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    axios.get('https://floating-bayou-71862.herokuapp.com/projects').then((res) => {

      this.setState({ projects: res.data });

    }).catch(function (error) {
      console.log(error);
    });
  }

  componentWillUnmount() {

  }
  render() {
    return (

      <MainContainer sidebar="Projects">
        <h1 className="page-header">Projects</h1>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map((project, index) => {
                let start = moment(project.ProjectStartDate).utc().format('LL');
                let end = "";
                if (project.ProjectEndDate == null) {
                  end = "n/a";
                } else {
                  end = moment(project.ProjectEndDate).utc().format('LL');
                }

                return (
                  <tr key={index}>
                    <td>{project.ProjectName}</td>
                    <td>{project.ProjectDescription}</td>

                    <td>{start}</td>
                    <td>{end}</td>
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

export default Projects;