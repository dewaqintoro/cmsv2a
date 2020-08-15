// let initialState = {
//   title : "dew",
//   covids : [
//     {
//       id:1,
//       nama: "dewaq",
//       alamat: "magetan",
//       umur: 21
//     },
//     {
//       id:2,
//       nama: "kiki",
//       alamat: "Solo",
//       umur: 21
//     },
//     {
//       id:3,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     },
//     {
//       id:4,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     },
//     {
//       id:5,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     },
//     {
//       id:6,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     },
//     {
//       id:7,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     },
//     {
//       id:8,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     },
//     {
//       id:9,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     },
//     {
//       id:10,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     },
//     {
//       id:11,
//       nama: "Ani",
//       alamat: "Semarang",
//       umur: 21
//     }
//   ],
//   error: false,
// }

// const users = (state = initialState, action) => {
//   return state
// }

// export default users
 

import { GET_COVIDS_LIST, GET_COVID_INDO, GET_COVID_POSITIF, GET_COVID_SEMBUH } from "../actions/userActions"

let initialState = {
  title: "dewa",
  getCovidsList:false,
  getCovidIndo:false,
  getCovidPositif:false,
  getCovidSembuh:false,

  errorCovidsList: false,
  errorCovidIndo:false,
  errorCovidPositif:false ,
  errorCovidSembuh:false ,

  isSignedIn: null,
  userId: null

}
 
const covids = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVIDS_LIST:
      return{
        ...state,
        getCovidsList: action.payload.data,
        errorCovidsList: action.payload.errorMessage
      }

    case GET_COVID_INDO:
      return{
        ...state,
        getCovidIndo: action.payload.data,
        errorCovidIndo: action.payload.errorMessage
      }

    case GET_COVID_POSITIF:
      return{
        ...state,
        getCovidPositif: action.payload.data,
        errorCovidPositif: action.payload.errorMessage
      }

    case GET_COVID_SEMBUH:
      return{
        ...state,
        getCovidSembuh: action.payload.data,
        errorCovidSembuh: action.payload.errorMessage
      }

    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };

      case SIGN_OUT:
        return { ...state, isSignedIn: false, userId: null };

    default:
      return state
  }
}

export default covids
