import React from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

class ProjectsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        axios.get('https://floating-bayou-71862.herokuapp.com/projects').then((res) => {
        
            this.setState({projects: res.data});
            
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map((project, index) => {
                                    let days = moment().diff([project.ProjectStartDate], 'days');
                                    return (
                                        <tr key={index}>
                                            <td>{project.ProjectName}</td>
                                            <td>Active {days} Days</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        );

    }
}

export default ProjectsPanel;