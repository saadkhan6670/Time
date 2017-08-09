import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div>
     <p>Hours {this.props.appState.timeinHr}</p>
     <p>Minutes {this.props.appState.timeinMin}</p>
     <p>Seconds { this.props.appState.timeinSec}</p>
        <button onClick={this.onStart}>
          start
        </button> 

        <button onClick={this.onReset}>
          reset
        </button> 

         <button onClick={this.onStop}> Stop </button>

        <DevTools />
      </div>
    );
  }
onStart = () => {
  this.props.appState.startTimer();
}
  onReset = () => {
    this.props.appState.resetTimer();
  }
  onStop =() => {
    this.props.appState.stopTimer();
  }
};

export default App;
