import React, { Component } from 'react';
// semantic-ui => react => components

class ClassComponent extends Component {
  // figure out where to fetch?
    // is it based on priority? <== very hard rule
    // since it's async, can it render without fetch being done?

  constructor(props) {
    super(props);
    console.log('constructor', this.props.name);

    this.state = {
      default: 'state' // change this to the new sdata from the server
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props.name);
    return null;
  }

  clicked = () => {
    this.setState({})
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate', this.props.name);
    return false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', this.props.name);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props.name);
  }


  render() {
    const { name, color, children } = this.props;
    console.log('render', this.props.name);

    return (
      <div style={{ border: `1px solid ${color}`, margin: 10, textAlign: 'center' }}>
        <p style={{ color }}>{name}</p>
        {children}
        <button onClick={this.clicked}>click me</button>
      </div>
    );
  }

  componentDidMount() {
    // fetch here
    // .then(() => { this.setState }) // in practice, doesnt happen
    //. guarantees it!
    console.log('componentDidMount', this.props.name);
  }
}

ClassComponent.defaultProps = {
  color: 'black'
}

export default ClassComponent;
