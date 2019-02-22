import React from 'react';
import UUID from 'uuid';
import Watch from './Watch';
import Laps from './Laps';

export default class StopWatch extends React.Component {
  state = {
    laps: [],
  }

  recordLap = time => {
    this.setState(prevState => {
      return {
        laps: [...prevState.laps, { id: UUID(), time }]
      }
    })
  }

  tossWatch = () => {
    this.props.tossWatch(this.props.id);
  }

  render() {
    return (
      <div style={{ border: '1px solid black', padding: 10, margin: 10 }}>
        <Watch recordLap={this.recordLap} />
        <button onClick={this.tossWatch}>Toss Watch</button>
        <Laps laps={this.state.laps} />
      </div>
    )
  }
}
