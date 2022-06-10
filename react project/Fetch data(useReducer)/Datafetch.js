import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch Success':
            return {
                loading: false,
                post: action.payload,
                error: ""
            }
        case 'fetch Error':
            return {
                loading: false,
                post: {},
                error: 'error Occured'

            }
        default:
            return state
    }
}

const Datafetch = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => { dispatch({ type: 'fetch Success', payload: response.data }) })
            .catch(error => { dispatch({ type: 'fetch Error' }) })
    }, [])
    return (
        <div>{
            state.loading && (<div class="wrapper">
            <div class="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>)
        }
            {!state.loading && state.post.title}
            {state.error ? state.error : null}</div>
    )
}

export default Datafetch