import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux'
import App from './app'

const history = createBrowserHistory();
//const store = configureStore(history)
const rootElement = document.getElementById('root')
ReactDOM.render(
//  <Provider store={store}>
//    <ConnectedRouter history={history}>
        <App/>,
//    </ConnectedRouter>,
//  </Provider>,
  rootElement
)