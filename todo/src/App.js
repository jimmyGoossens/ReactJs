import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcom.js';
import List from './component/List.js';
import Todo from './component/TodoForm.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        todos:[]
    };
}
    onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
    console.log(newTodoList);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome/>
     
        <Todo onNewTodo={this.onNewTodo.bind(this)} />

        <List todos={this.props.newTodoList} />
      

      </div>
    );
  }
}

export default App; 
