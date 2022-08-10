import React from 'react'

const ReactHooks = () => {
    return (
        <div>
            <div>What is Hooks?</div>
      <div>Hook allow us to in React to manage states & Life Cycle Methods</div>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useReducer</li>
        <li>useMemo</li>
        <li>useContext</li>
        <li>useRef</li>
        <li>Custom Hooks</li>
      </ul>
      <h5>useState</h5>
      <div>useState Hook allow us to track state in functional components</div>
      <div><code>import {'useState'} from "react"</code></div>
      <div><code>const [name, setName] = useState("")</code></div>
      <div>--------------------------------------------------------</div>
      <h5>useEffect</h5>
      <div>useEffect hook allows you to perform side effect in functional components</div>
      <div><code>import {'useEffect'} from "react"</code></div>
      <div><code>useEffect(() { },[name])</code></div>
      <div>--------------------------------------------------------</div>
      <h5>useReducer</h5>
      <div>useReducer hook is simillar to useState Hook, you can maintain states & dispatch or trigger events from anywhere</div>
      <div><code>import {'useReducer'} from "react"</code></div>
      <div>
        {/* <code>
          const reducer = (state, action) => {
            switch (action.type) {
              case "XYZ":
                return setName ("Gorakh")
              
            }
          }
        </code> */}
      </div>
      <div><code>const [name, setName] = useReducer(reducer, "Ankit")</code></div>
      {/* <div><button onClick={() => 'dispatch("XYZ")'}></button></div> */}
      <div>--------------------------------------------------------</div>
      <h5>useMemo</h5>
      <div>to optimize performance in expensive operations or functions in react functional components</div>
      <div>--------------------------------------------------------</div>
      <h5>useMemo</h5>
      <div>to optimize performance in expensive operations or functions in react functional components</div>
      <div><code>import {'useMemo'} from "react"</code></div>
      <div><code>useMemo(() { }, [])</code></div>
      <div>--------------------------------------------------------</div>
      <h5>useContext</h5>
      <div>useContext is the way to manage your states global level in your react application.</div>
      <div><code>import {'useContext', 'createContext'} from "react"</code></div>
      <div><code></code></div>
      <div>--------------------------------------------------------</div>
      <h5>useRef</h5>
      <div>useRef used to store mutable value that does not cause re-render when updated, or you access it from Direct to DOM</div>
      <div><code>import {'useRef'} from "react"</code></div>
      <div><code>const name = useRef("ankit");</code></div>
      Read useRef Value
      <div><code>name.current</code></div>
      Modify useRef Value
      <div><code>name.current = "Gorakh"</code></div>
      <div>--------------------------------------------------------</div>
      <h5>Custom Hooks</h5>
      <div>Custom Hooks are nothing but as considered as Reusable code of Functions</div>
        </div>
    )
}

export default ReactHooks
