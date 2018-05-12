import React from 'react';
//import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    //const anecdotes = this.context.store.getState()
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              {/*<button onClick={()=>this.context.store.dispatch({type: 'VOTE'})}>vote</button>*/}
              <button onClick={()=>this.props.store.dispatch({type: 'VOTE', id: anecdote.id})}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input /></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}
/*
AnecList.contextTypes = {
  store: PropTypes.object
}
*/
export default App