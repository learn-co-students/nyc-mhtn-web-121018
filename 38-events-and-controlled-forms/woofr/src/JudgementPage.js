import React, { Component } from 'react';
import Card from './Card';

class JudgementPage extends Component {
  // no arrow function, why no issue with this.props?????
  renderCard() {
    if (this.props.currentDogIndex < this.props.dogProfiles.length) {
      return <Card profile={this.props.dogProfiles[this.props.currentDogIndex]} />
    } else {
      return <h2>No dogs left in the dog park.</h2>
    }
  }

  // React.createElement() => {'h1', props, children}

  render() {
    return (
      <React.Fragment>
        {this.renderCard()}
        {/*
          this.props.currentDogIndex < this.props.dogProfiles.length ?
            <Card profile={this.props.dogProfiles[this.props.currentDogIndex]} />
          :
            <h2>No dogs left in the dog park.</h2>
        */}
        <button className="swipe-button" onClick={this.props.dislike}>Growl</button> {/* Dislike */}
        <button className="swipe-button" onClick={this.props.like}>Woof</button> {/* Like */}
      </React.Fragment>
    );
  }
}

export default JudgementPage;
