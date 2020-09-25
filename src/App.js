import React, { Component} from 'react';
import Header from './components/Header';
import CreateTodo from './components/CreatTodo';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class App extends Component {
    state = {
      tasks: ['Design the user interface of the app', 'Write the code', 'Test the app']
    };

    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({tasks: newArr});
    }

    handleSubmit = (task) => {
        this.setState({tasks: [...this.state.tasks, task]});
    }
    
    render() {
        return (
          <Card style={{ width: '24rem' }}>
            <Card.Header><Header numTodos={this.state.tasks.length} /></Card.Header>
            <Card.Body>    
               <AddNew onFormSubmit={this.handleSubmit} />      
              <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />  
            </Card.Body>
          </Card>
        );
    }
}

export default App;
