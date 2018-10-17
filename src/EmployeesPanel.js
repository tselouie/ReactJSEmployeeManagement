import React, { Component } from 'react';
import axios from 'axios';

class EmployeesPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  componentDidMount() {

    axios.get('https://floating-bayou-71862.herokuapp.com/employees').then((res) => {
      this.setState({ employees: res.data });
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (<div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Employees</h3>
      </div>
      <div className="panel-body">
        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <tbody>

              {this.state.employees.map((employee, index) => {
                return (
                  <tr key={index}>
                    <td>{employee.FirstName} {employee.LastName}</td>
                    <td>{employee.Position.PositionName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <a href="/employees" className="btn btn-primary form-control">View All Employee Data</a>
      </div>
    </div>
    );
  }
}

export default EmployeesPanel;