import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAnimalAction, fetchAnimalAction } from '../actions';
import AnimalAdapter from '../apis/AnimalAdapter';

class AnimalPicture extends Component {
  getCat = (event) => {
    // this.props.updateAnimal(url);
  }

  getDog = (event) => {
    // just like React
    // you don't need Thunk
    this.props.fetchAnimal();

    // this can be done without thunk
    // dispatch({ type: "FETCHING_A_PICTURE" })
    // AnimalAdapter.getDog()
    //   .then(url => {
    //     dispatch(updateAnimalAction(url))
    //     dispatch({ type: "FETCHED_PICTURE" })
    //     // this.props.updateAnimal(url);
    //   })
  }

  renderPicture = () => {
    if (!this.props.isLoading) {
      return <img src={this.props.animalSrc} alt="cute animal" />
    } else {
      return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
    }
  }

  render() {
    return (
    <div className="animal-picture">
      <button onClick={this.getCat}>Fetch Cat</button>
      <button onClick={this.getDog}>Fetch Dog</button>
      {this.renderPicture()}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    animalSrc: state.animal.animalSrc,
    isLoading: state.animal.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAnimal: (url) => dispatch(updateAnimalAction(url)),
    fetchAnimal: () => dispatch(fetchAnimalAction())
    // fetchAnimal: () => {
    //   // am i using anything called thunk yet?
    //   AnimalAdapter.getDog()
    //     .then(url => {
    //       dispatch(updateAnimalAction(url))
    //       // this.props.updateAnimal(url);
    //     })
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPicture);
