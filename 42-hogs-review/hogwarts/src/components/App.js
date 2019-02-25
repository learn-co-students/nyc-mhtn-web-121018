import React, { Component } from 'react';
import '../App.css';
import uuid from 'uuid';

import Nav from './Nav';
import CardList from './CardList';
import Filter from './Filter';

import hogs from '../porkers_data';

// hog images =>
// 1. move to public and create them src strings
// 2. import all files and use an object that maps between names to the file
//    {
//   string_of_name: require(image)
// }
// 3. all got one image => skipped this

class App extends Component {
  state = {
    originalHogs: [],
    hogs: [],
    alphabeticalOrdering: "unsorted",
    weightOrdering: "unweighted",
    greasedFiltering: "all",
  }

  // is a hint to a code smell => maybe lifting state is better
  handleAlpha = (e) => {
    this.setState({ alphabeticalOrdering: e.target.value });
    // don't do this, it will be off by one:
    // this.props.handleSort(this.state.alphabeticalOrdering, this.state.weightOrdering, this.state.greasedFiltering);
  }

  handleWeight = (e) => {
    this.setState({ weightOrdering: e.target.value });
  }

  handleGrease = (e) => {
    this.setState({ greasedFiltering: e.target.value });
  }


  componentDidMount() {
    // safe to change state after creation here
    // as if this was coming from an API

    // let newHogs = [...hogs];
    // newHogs.forEach(hog => hog["id"] = uuid());

    const hogsWithId = hogs.map(hog => {
      return {...hog, id: uuid()};
    });

    this.setState({
      // hogs.map(hog => hog) // implicit return
      // hogs.map(hog => {}) // cannot implicitly return an object
      // hogs: hogs.map(hog => {...hog, id: uuid()});
      // this.setState({ hogs: newHogs });

      // [{} {} {}] => [{ + id}, { + id}]
      hogs: hogsWithId,
      originalHogs: hogsWithId, // don't change this
    })
  }

  handleReorganization = (alpha, weight, greased) => {
    // this.setState
    let newHogs = [...this.state.originalHogs]; // another code smell
    // this is a tradeoff of "time vs space"
    // time => how fast => with lifting state, you write a function that sorts => there's a solution to this one
    // space => how much memory => taking up more memory

    newHogs = newHogs.filter(hog => {
      if (greased === 'all') {
        return hog;
      } else if (greased === 'greased') {
        return hog.greased === true;
      } else if (greased === 'ungreased') {
        return hog.greased === false;
      }
    })

    this.setState({ hogs: newHogs });
  }

  organizedHogs = () => {
    return this.state.hogs.filter(hog => {
      if (this.state.greasedFiltering === 'all') {
        return hog;
      } else if (this.state.greasedFiltering === 'greased') {
        return hog.greased === true;
      } else if (this.state.greasedFiltering === 'ungreased') {
        return hog.greased === false;
      }
    }).sort((hog1, hog2) => {
      // it sorts!
      if (this.state.weightOrdering === 'unweighted') {
        return 0;
      } else if (this.state.weightOrdering === 'ascending') {
        return Number.parseFloat(hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) - Number.parseFloat(hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']);
      } else if (this.state.weightOrdering === 'descending') {
        return Number.parseFloat(hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) - Number.parseFloat(hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']);
      }
      // everyone gets the logic, right?
    }) // .sort() for alphabetize
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          handleAlpha={this.handleAlpha}
          handleGrease={this.handleGrease}
          handleWeight={this.handleWeight}
          alphabeticalOrdering={this.state.alphabeticalOrdering}
          weightOrdering={this.state.weightOrdering}
          greasedFiltering={this.state.greasedFiltering}
        />
      <CardList hogList={this.organizedHogs()}/>
      </div>
    );
  }
}

export default App;
