import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container my-5 py-5">
                <div className="card text-center">
                    <div className="shadow">
                        <h1 className="display-4">OPS!</h1>
                        <h1 className="display-1">404</h1>
                        <h1 className="display-4">Not Found</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;