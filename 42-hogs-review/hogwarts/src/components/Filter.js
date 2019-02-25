import React from 'react';

class Filter extends React.Component {

  render() {
    console.log(this.state);
    return (
      <form>
        <select value={this.props.alphabeticalOrdering} onChange={this.props.handleAlpha}>
          <option value="unsorted">Unsorted</option>
          <option value="a-to-z">A-to-Z</option>
          <option value="z-to-a">Z-to-A</option>
        </select>
        <select value={this.props.weightOrdering} onChange={this.props.handleWeight}>
          <option value="unweighted">Unweighted</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <select value={this.props.greasedFiltering} onChange={this.props.handleGrease}>
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="ungreased">Ungreased</option>
        </select>
      </form>
    );
  }
}

export default Filter;
