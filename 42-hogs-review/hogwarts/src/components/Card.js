import React from 'react';
import Details from './Details';

/*
{
  name: 'Mudblood',
  specialty: 'Mediocre magic',
  greased: false,
  'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  'highest medal achieved': 'bronze'
}
*/
class Card extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //
  //   }
  // }

  state = {
    hidden: false,
  }

  toggleDetails = () => {
    // <= the state it's being changed to depends on the previous state
    // if you somehow had multiple events (this one) fired within the same context
    // they will all be on the event loop waiting to be popped off
    // React will try to be smart and batch all those setStates together
    // So there is no guarantee that this.state.hidden is what you think it is
    //  for (let i = 0; i < 5; i++)
    this.setState({ hidden: !this.state.hidden })
    // this guarantees that even if the setStates are batched,
    // the state being used in this setState is the last state
    // this.setState((currentState) => { return { hidden: !currentState.hidden } })
    // this is much safer BUT it's not on the Code Challenge!!!!!!!!!!!!!!!!
  }

  render() {
    console.log(this.props);
    console.log(require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`));
    // require is for static linking
    return (
      <div onClick={this.toggleDetails}>
        <h1>{this.props.hog.name}</h1>
        {/*<img src={require('../cherub.png')} alt="hog picture"/>*/}
        <img src={`http://localhost:3000/hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`} alt="hog picture" />
        {/*<img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)} alt="hog picture"/>*/}

        { this.state.hidden ?
          <Details
            specialty={this.props.hog.specialty}
            greased={this.props.hog.greased.toString()}
            ratio={this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            medal={this.props.hog['highest medal achieved']}
          />
        :
          null
        }

      </div>
    );
  }
}

export default Card;
