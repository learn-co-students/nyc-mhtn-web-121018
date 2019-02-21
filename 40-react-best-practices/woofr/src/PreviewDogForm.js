import React, { Component, Fragment } from 'react';
import Card from './Card';
import DogForm from './DogForm';

class PreviewDogForm extends Component {
  render() {
    const profile = { name: this.props.name, age: this.props.age, breed: this.props.breed, src: this.props.src};
    return (
      <Fragment>
        <DogForm name={this.props.name} age={this.props.age} breed={this.props.breed} src={this.props.src} handleChange={this.handleChange} handleSubmit={this.props.handleSubmission} />
        <Card profile={ profile } />
      </Fragment>
    );
  }
}

export default PreviewDogForm;
