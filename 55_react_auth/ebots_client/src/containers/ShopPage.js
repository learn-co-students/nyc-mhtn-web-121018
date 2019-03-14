import React, { Fragment } from 'react'
import SaleList from '../components/SaleList'


class ShopPage extends React.Component {
  state = {
    bots: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/bots")
    .then(res => res.json())
    .then(response => {
      this.setState({bots: response})
    })
  }

  selectBot = (botID) => {
    fetch(`http://localhost:3001/api/v1/bots/${botID}/purchase`, {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        this.setState(prevState => {
          let newBots = prevState.bots.filter(bot => bot.id !== response.bot.id)
          return {
            bots: newBots
          }
        }, () => {
          this.props.updateUser(response.user)
        })
      }
    })
  }
  render(){
    const { bots } = this.state
    return (
        <Fragment>
          <SaleList bots={bots} selectBot={this.selectBot}/>
        </Fragment>

    )
  }
}

export default ShopPage