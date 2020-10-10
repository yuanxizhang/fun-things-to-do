import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };
  render() {
    return(
       <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length}/>
          <TodoList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
