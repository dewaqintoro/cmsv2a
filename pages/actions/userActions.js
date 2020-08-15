import React, { Component } from 'react'
import axios from 'axios'
 
export const GET_COVIDS_LIST = "GET_COVIDS_LIST"
export const GET_COVID_INDO = "GET_COVID_INDO"
export const GET_COVID_POSITIF = "GET_COVID_POSITIF"
export const GET_COVID_SEMBUH = "GET_COVID_SEMBUH"


export const getCovidsList = () => {
  return (dispatch) => {
    // axios.get('http://localhost:3004/covids') 
    axios.get(`https://api.kawalcorona.com/indonesia/provinsi/`) 


      .then(function (response) {
        console.log("action prov",response.data);
        dispatch({
          type: GET_COVIDS_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: GET_COVIDS_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
} 

export const getCovidIndo = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/indonesia/') 

      .then(function (response) {
        // console.log("action indo",response);
        dispatch({
          type: GET_COVID_INDO,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: GET_COVID_INDO,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const getCovidPositif = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/positif') 

      .then(function (response) {
        console.log("action positif",response);
        dispatch({
          type: GET_COVID_POSITIF,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: GET_COVID_POSITIF,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}


export const getCovidSembuh = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/sembuh') 

      .then(function (response) {
        // console.log("action positif",response);
        dispatch({
          type: GET_COVID_SEMBUH,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: GET_COVID_SEMBUH,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}




class userActionsyy extends Component {
  render() {
    return (
      <div>
        <h1>dew</h1>
      </div>
    )
  }
}

export default userActionsyy