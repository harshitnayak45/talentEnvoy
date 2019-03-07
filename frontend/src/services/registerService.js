import axios from 'axios';
import { url } from '../const/url';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
const client = new ApolloClient({
  uri: url.graphql_url
});

export default class RegisterService {

  constructor() {
  
  }

  registerUser(userInfoVo) {
    console.log('xxxxx fff', userInfoVo);
    // return axios({
    //   url: url.graphql_url,
    //   method: 'post',
    //   data: {
    //     query: `
    //     mutation {
    //                 createUser(userInput: {email: "${userInfoVo.email}", password: "${userInfoVo.password}"}) {
    //                     _id
    //                     email
    //                   }
    //                 }
    //       `
    //   }
    // })

    return  client.query({
      query: gql`
      query {
        mutation {
                  createUser(userInput: {email: "${userInfoVo.email}", password: "${userInfoVo.password}"}) {
                  _id
                 email
                 }
               }
      }
      
      `,
    })
    .then((result) => {
      console.log('xxxxx', result);
      return Promise.resolve(result);

    });

  }

}
