import React from 'react';
import { render } from 'react-dom';

import { Room } from "./components/Room";

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Room data={'fhwjefh'}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));