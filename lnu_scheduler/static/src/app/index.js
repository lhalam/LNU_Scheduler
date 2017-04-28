import React from 'react';
import ReactDOM from 'react-dom';

import Rooms from "./components/Rooms";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Rooms/>
                    </div>
                </div>
            </div>
        );
    }
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app);