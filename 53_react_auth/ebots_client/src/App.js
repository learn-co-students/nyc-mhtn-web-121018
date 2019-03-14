import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ShopPage from './containers/ShopPage'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount(){
    const token = localStorage.getItem("token")

    if (token){
      fetch("http://localhost:3001/api/v1/auto_login", {
        method: "GET",
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        this.setState({
          currentUser: response
        })
      })
    } 
  }

  setCurrentUser = (response) => {
    localStorage.setItem("token", response.jwt)
    this.setState({
      currentUser: response.user
    })
  }

  updateUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  logout = () => {
    localStorage.removeItem("token")
    this.setState({
      currentUser: null
    }, () => { this.props.history.push("/login")})
  }

  render() {
    return (
      <Grid>
        <Navbar history={this.props.history} currentUser={this.state.currentUser} logout={this.logout}/>
        <Grid.Row centered>
          <Switch>
            <Route path="/users/:id" render={(routerProps) => <Profile {...routerProps} updateUser={this.updateUser}/>} />
            <Route path="/shop" render={(routerProps) => <ShopPage {...routerProps} updateUser={this.updateUser}/>} />
            <Route path="/login" render={(routerProps)=> <LoginForm {...routerProps} setCurrentUser={this.setCurrentUser}/>} />
            <Route path="/signup" render={(routerProps)=> <SignupForm {...routerProps} setCurrentUser={this.setCurrentUser}/>} />
          </Switch>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
