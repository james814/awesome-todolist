import React, { createRef, useState, useEffect } from 'react';
import './style.scss';

const App = () => {
  const [state, setState] = useState({
    value: '',
    list: []
  })
  const input = createRef()
  const onChange = e => setState({ ...state, value: e.target.value })
  const submit = e => {
    e.preventDefault()
    setState({
      value: '',
      list: [
        {
          todo: state.value,
          check: false
        },
        ...state.list
      ]
    })
  }
  const check = (idx) => {
    // const newArr = [...state.list]
    // setState({
    //   ...state,
    //   list[idx]: [
    //     ...state.list,
    //     this
    //   ]
    // }) 
  }
  useEffect(() => {
    input.current.focus()
  }, [])
  return (
    <div>
      <div className="inputWrap">
        <form onSubmit={submit}>
          <input
            type="text"
            className="input"
            onChange={onChange}
            value={state.value}
            ref={input}
            placeholder="What needs to be done?"
          />
          <button type="submit">submit</button>
        </form>
        <ul>
          {state.list.map((ele, idx) => {
            return (
              <li key={idx}>
                <div className="check" onClick={() => check(idx)}></div>
                {ele.todo}
              </li>
            )
          })}
          <li>
            {state.list.length} items left
            <button>All</button>
            <button>Active</button>
            <button>Complete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;