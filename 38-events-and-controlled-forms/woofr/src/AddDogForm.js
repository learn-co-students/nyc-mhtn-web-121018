import React, { Component } from 'react';

class AddDogForm extends Component {
  state = {
    name: '',
    age: 0,
    breed: '',
    src: '',
  }

  // controlled form => react controls this form

  handleSubmission = (event) => {
    // it's a form, it' refreshed -=> prevent default
    event.preventDefault();
    console.log('submit', event);
    console.log('the native event', event.currentTarget);
    // debugger;
    // event.target["breed"].value
    // this.props.addDog(event.target["name"].value, event.target["age"].value, event.target["breed"].value, event.target["src"].value)
    // this.props.addDog(this.state.name, this.state.age, this.state.breed, this.state.src)
    this.props.addDog(this.state);
  }

  changeName = (event) => {
    this.setState({ name: event.target.value })
  }

  changeAge = (event) => {
    this.setState({ age: event.target.value })
  }

  changeBreed = (event) => {
    this.setState({ breed: event.target.value })
  }

  changeSelfie = (event) => {
    this.setState({ src: event.target.value })
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
