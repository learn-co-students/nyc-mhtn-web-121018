import React, { Component } from 'react';

class DogForm extends Component {
  // local state
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange}/>
        <label>Age:</label>
        <input type="number" name="age" value={this.props.age}  onChange={this.props.handleChange}/>
        <label>Breed:</label>
        <input type="text" name="breed" value={this.props.breed}  onChange={this.props.handleChange}/>
        <label>Selfie:</label>
        <input type="text" name="src" value={this.props.src}  onChange={this.props.handleChange}/>
        <input type="submit" value="Join the Pack!"/>
      </form>
    );
  }
}

export default DogForm;
