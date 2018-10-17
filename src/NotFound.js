import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';

class NotFound extends Component {

    render() {
        return (

            <MainContainer>
                <h1 className="page-header">Not Found</h1>
                <div className="row">
                   <span>Page Not Found</span>
                </div>
            </MainContainer>

        );
    }
}

export default NotFound;