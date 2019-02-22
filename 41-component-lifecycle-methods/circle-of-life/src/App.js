import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
// import FunctionalComponent from './FunctionalComponent';

// class components have lifecycle methods, functional ones do not
class App extends Component {
  state = {
    example: "great grandparent"
  }

  click = () => {
    this.setState({ example: "great grandpapa" })
  }

  render() {
    return (
      <React.Fragment>
        <ClassComponent name={this.state.example}>
          <ClassComponent name="grandparent">
            <ClassComponent name="parent">
              <ClassComponent name="child">
                <ClassComponent name="grand child one" />
                <ClassComponent name="grand child two" />
              </ClassComponent>
            </ClassComponent>
          </ClassComponent>
          <ClassComponent name="papa">
            <ClassComponent name="mama" />
          </ClassComponent>
        </ClassComponent>
        <button onClick={this.click}>Super Click!</button>
      </React.Fragment>
    );
  }
}

export default App;
