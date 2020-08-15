import 'antd/dist/antd.css'
import '../styles/dew.css'
// import '../styles/global.css'
 
import '../styles/dashboard.css'
 
import '../styles/card.css'
import '../styles/mapku.css'
import '../styles/table.css'
import '../styles/infoBox.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../styles/Login.css'


const store = createStore(reducer, compose(applyMiddleware(thunk)));
import { Provider, connect } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducers'

// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import React from 'react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      {console.log("ini store2",store)}
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp