import axios from 'axios';
import decode from 'jwt-decode';
import { url } from '../const/url';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
const client = new ApolloClient({
  uri: url.graphql_url
});

export default class AuthService {

    constructor() {
        this.getProfile = this.getProfile.bind(this)
    }
    
      authenticateUsr(userInfoVo) { 

    return  client.query({
          query: gql`
          query {
            login(email: "${userInfoVo.email}", password: "${userInfoVo.password}") {
              userId
              token
              tokenExpiration
            }
          }
          `,
        })
        .then((result) => {
          console.log('xxxxx', result);
           // this.setToken(result.data.login.token);
            this.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzgxMTBjZWQwMWJjMDE3YWMyMThlMGUiLCJlbWFpbCI6InRhbGVudEB0YWxlbnRlbnZveS5jb20iLCJpYXQiOjE1NTE5NjI1MjgsImV4cCI6MTU1MTk2NjEyOH0.Q8ZFuxewyowzw5Hz2aax3c9Clw404k0SGihJGmhULG4");
            return Promise.resolve(result);
           
        });  
         
    }
    setToken(idToken) {
      // Saves user token to localStorage
      localStorage.setItem('token', JSON.stringify(idToken));
  }

  getToken() {
      let token = '';
      if (localStorage.getItem('token')) {
          token = JSON.parse(localStorage.getItem('token'));
      }
      return token
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    console.log('xxxxxxxxxx-,', decode(this.getToken()));
    return decode(this.getToken());
}
  
  loggedIn() {
     
      const token = this.getToken() // GEtting token from localstorage
      return !!token && !this.isTokenExpired(token) // handwaiving here
  }
  
  isTokenExpired(token) {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            return true;
        }
        else
            return false;
    }
    catch (err) {
        return false;
    }
}
}
