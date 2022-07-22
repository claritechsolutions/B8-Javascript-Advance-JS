import {createStore, applyMiddleware} from 'redux'
import { CartReducer } from './CartRedux/CartReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

export const Store= createStore(CartReducer, composeWithDevTools(applyMiddleware(logger)))