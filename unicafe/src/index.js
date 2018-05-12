import React from 'react'
import ReactDOM from 'react-dom'
import counterReducer from './reducer'
import {createStore} from 'redux'
const store = createStore(counterReducer)

const Statistiikka = () => {
  //const palautteita = 0
  console.log('mytest1',store.getState())
  const state = store.getState()
  if (state.good===0 && state.ok===0 && state.bad===0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{state.good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{state.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{state.bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{Number(((state.good-state.bad)/(state.good+state.ok+state.bad)).toFixed(1))}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{Number((100*state.good/(state.good+state.ok+state.bad)).toFixed(1))+" %"}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={()=>store.dispatch({type: 'ZERO'})} >nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    //const newState = counterReducer(state, nappi)
    store.dispatch({type: nappi})
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

//ReactDOM.render(<App />, document.getElementById('root'));

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)