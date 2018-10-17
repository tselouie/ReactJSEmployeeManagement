import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';
import moment from 'moment';


class Employees extends Component {
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
        return (


            <MainContainer sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name &amp; Position</th>
                            <th>Address</th>
                            <th>Phone Num</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee, index) => {
                                let hire = moment(employee.HireDate).utc().format('LL');

                                return (
                                    <tr key={index}>
                                        <td>{employee.FirstName} - {employee.Position.PositionName}</td>
                                        <td>{employee.AddressStreet} {employee.AddressCity} {employee.AddressState}, {employee.AddressZip}</td>
                                        <td>{employee.PhoneNum} ext. {employee.Extension}</td>
                                        <td>{hire}</td>
                                        <td>${employee.SalaryBonus}</td>
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

export default Employees;