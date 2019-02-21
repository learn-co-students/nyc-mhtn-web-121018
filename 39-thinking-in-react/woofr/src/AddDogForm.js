import React, { Component } from 'react';

class AddDogForm extends Component {
  state = {
    name: '',
    age: 0,
    breed: '',
    src: '',
  }

  handleSubmission = (event) => {
    event.preventDefault();
    this.props.addDog(this.state);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <label>Age:</label>
        <input type="number" name="age" value={this.state.age}  onChange={this.handleChange}/>
        <label>Breed:</label>
        <input type="text" name="breed" value={this.state.breed}  onChange={this.handleChange}/>
        <label>Selfie:</label>
        <input type="text" name="src" value={this.state.src}  onChange={this.handleChange}/>
        <input type="submit" value="Join the Pack!"/>
      </form>
    );
  }
}

export default AddDogForm;
