import React, { Component } from 'react';
import LandingContainer from './containers/LandingContainer.jsx';


class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
              <LandingPage />
            </div>
        )
    }
}

export default App;