/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import rootReducer from './reducers'
// import * as models from './models'
import models from './loader'
// // console.log('rootReducer', reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const loadingPlugin = createLoadingPlugin({ asNumber: true })

const configureStore = preloadedState => {
  const store = init({
    plugins: [loadingPlugin],
    models,
    redux: {
      reducers: {
        // root: rootReducer,
        ...rootReducer
      },
      initialState: preloadedState,
      enhancers: [composeEnhancers(applyMiddleware(thunk, createLogger()))]
    }
  })
  return store
}

export default configureStore
