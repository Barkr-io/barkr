import React, { Component } from 'react';
import LandingContainer from './containers/LandingContainer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <LandingContainer/>
            </div>
        )
    }
}

export default App;