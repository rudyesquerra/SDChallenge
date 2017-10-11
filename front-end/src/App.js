import React, { Component } from 'react';
import { Grid, PageHeader } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import ActivitiesAndMap from './pages/ActivitiesAndMap'
import NewActivity from './pages/newActivity'
import Signup from './pages/Signup'
import Login from './pages/Login'
import CompletedActivities from './pages/CompletedActivities'

import { addNewUser, checkLogin, handleUserLogin } from './actions/UserActions'
import { fetchAllActivities } from './actions/ActivitiesActions'
import { fetchCompletedActivities } from './actions/ActivitiesActions'


const mapComponentToProps = (store) =>{
  return {
    user: store.user.currentUser,
    userError: store.user.error,
    allActivities: store.allActivities,
    completedActivities: store.completedActivities
  }
}

export default connect(mapComponentToProps)(
  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        apiUrl: "http://localhost:3000"
      }
    }

    handleNewUser(input){
      this.props.dispatch(addNewUser(this.state.apiUrl, input))
    }

    handleLogin(input){
      this.props.dispatch(handleUserLogin(this.state.apiUrl, input))
    }

    componentWillMount(){
      this.props.dispatch(checkLogin(this.state.apiUrl))
      this.props.dispatch(fetchAllActivities(this.state.apiUrl))
      this.props.dispatch(fetchCompletedActivities(this.state.apiUrl))
    }

    render() {
      return (
        <Router>
          <div>
            <Route exact path="/" render={props => (
              <Grid>
                <PageHeader>
                  THE SAN DIEGO CHALLENGE
                </PageHeader>
                {
                  !this.props.user &&
                  <Login onSubmit={this.handleLogin.bind(this)} />
                }
                {
                  this.props.user &&
                  <h2>Hello, {this.props.user.name}!</h2>
                }
                <ActivitiesAndMap allActivities={this.props.allActivities}/>
                <CompletedActivities completedactivities={this.props.completedActivities} />

              </Grid>
            )}/>

            <Route exact path="/signup" render={props => (
              <Grid>
                <Signup onSubmit={this.handleNewUser.bind(this)} />
                  {this.props.user &&
                    <Redirect to="/" />
                  }
              </Grid>
            )}/>

            <Route exact path="/activities/new" render={props => (
              <Grid>
                {
                  this.props.user.email=="admin@example.com" &&
                  <NewActivity onSubmit={this.handleNewActivity.bind(this)} />
                }
              </Grid>
            )}/>
          </div>
        </Router>
      );
    }

  }
)
