import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
      </div>
    </div>
    );
  }
}

export default EmployeesPanel;