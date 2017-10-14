import React from 'react';
import './Home.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }
  render() {
    return (
      <div className="App">
        <div id="title-bar">
          <h1>Cashfork</h1>
        </div>
        <div className="feature-box" id="pitch">
          <h2 id="pitch-text">Your commits can pay you back</h2>
        </div>
        <div className="feature-box" id="voting">
          <h2>Users vote for features with their wallets</h2>
          <button id="how-to-vote">How to vote</button>
        </div>
        <div className="feature-box" id="rewards">
          <h2 id="rewards-text">Set rewards for different funding levels</h2>
          <button id="how-to-vote">Make your fans happy</button>
        </div>
        <div className="feature-box" id="payment">
          <h2>You get paid when features are merged into production</h2>
          <button id="getting-paid">Getting paid</button>
        </div>
      </div>
    );
  }
}

export default App;
