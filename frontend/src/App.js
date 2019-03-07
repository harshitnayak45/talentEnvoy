import React, { Component } from 'react';
import {withRouter} from 'react-router';
import './App.scss';
import './responsive.scss';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppLayout from './components/app-layout/app-layout';
import Login from './components/login/login';
import Register from './components/register/register';

const client = new ApolloClient({
  uri: "http://localhost:3300/graphql"
});class App extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
          <ApolloProvider client={client}>
          <Router>
          <div>
            <Switch>
              <Route exact path="/" component={AppLayout} />  
              <Route path="/login" component={Login} /> 
              <Route path="/register" component={Register} />  
            </Switch>

          </div>
        </Router>
  </ApolloProvider> 
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
