import React, { Component, Fragment } from 'react';
import Card from './Card';

// we will make this one component same as AddDogForm
class EditDogForm extends Component {
  state = {
    name: '',
    age: 0,
    breed: '',
    src: '',
  }

  handleSubmission = (event) => {
    event.preventDefault();
    this.props.editDog(this.state, this.props.currentDogIndex);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Fragment>
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

        <Card profile={this.state} />
      </Fragment>
    );
  }
}

export default EditDogForm;
